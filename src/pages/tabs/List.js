import "../SCSS/Page.scss"

import { useEffect, useState } from "react"

import { Alert, CircularProgress } from "@mui/material"

import Interact from "../../components/List/Interact.js"
import MusicTable from "../../components/List/MusicTable.js"

import { useQuery } from "react-query"
import getSong from "../../api-calls/song/getSong"

const List = (props) => {
    // Page state
    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(10)
    const [searchKey, setSearchKey] = useState("")

    // Functional state
    const [checkedID, setCheckedID] = useState([])
    const [checkAll, setCheckAll] = useState(false)
    // Query data
    const { isLoading: isSongLoading, isError: isSongError, refetch: refetchSong, data: songs} 
        = useQuery('getSong', () => getSong({page: page, pagesize: pagesize, searchKey: searchKey}))

    // Refetching data
    useEffect(()=>{ 
        if (!isNaN(page) && !isNaN(pagesize))
            refetchSong()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page, pagesize]);

    // Refetching data by search key
    useEffect(()=>{
        let timer = setTimeout(() => {
            if (page !== 1) setPage(1)
            else refetchSong()
        }, 500)
        return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchKey]);

    useEffect(()=>{ console.log(checkAll) }, [checkAll]);

    if (isSongLoading) {
        return <div className="page-container"><CircularProgress size={'150px'}/></div>
    } else if (isSongError) {
        return <div className="page-container"><Alert severity="error">Error getting song data</Alert></div>
    } else {
        return (
            <div className="page-container">
                <Interact 
                    setPageInfo={props.setPageInfo} 
                    searchKey={searchKey} setSearchKey={setSearchKey} 
                    refetchSong={refetchSong}
                    checkedID={checkedID} setCheckedID={setCheckedID}
                    setCheckAll={setCheckAll}
                    setPage={setPage} setPagesize={setPagesize}/>
                <MusicTable songs={songs.list} setPageInfo = {props.setPageInfo}
                    total={songs.total}
                    page={page} setPage={setPage}
                    pagesize={pagesize} setPagesize={setPagesize}
                    checkedID={checkedID} setCheckedID={setCheckedID}
                    checkAll={checkAll} setCheckAll={setCheckAll}
                    refetch={refetchSong}
                />
            </div>
        )
    }
}

export default List