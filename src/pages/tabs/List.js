import "../SCSS/Page.scss"

import { useEffect, useState } from "react"

import { Alert, CircularProgress } from "@mui/material"

import Navbar from "../../components/Navbar.js"
import Interact from "../../components/List/Interact.js"
import MusicTable from "../../components/List/MusicTable.js"

import { useQuery } from "react-query"
import getSong from "../../api-calls/song/getSong"

const List = (props) => {
    // Functional state
    const [checkedID, setCheckedID] = useState([])
    const [checkAll, setCheckAll] = useState(false)
    // Query data
    const { isLoading: isSongLoading, isError: isSongError, refetch: refetchSong, data: songs} 
        = useQuery('getSong', () => getSong({page: props.page, pagesize: props.pagesize, searchKey: props.searchKey}))

    // Refetching data
    useEffect(()=>{ 
        if (!isNaN(props.page) && !isNaN(props.pagesize))
            refetchSong()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.page, props.pagesize]);

    // Refetching data by search key
    useEffect(()=>{
        let timer = setTimeout(() => {
            if (props.page !== 1) props.setPage(1)
            else refetchSong()
        }, 500)
        return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searchKey]);

    if (isSongLoading) {
        return <div className="page-container"><CircularProgress size={'150px'}/></div>
    } else if (isSongError) {
        return <div className="page-container"><Alert severity="error">Error getting song data</Alert></div>
    } else {
        return (
            <div div className="page-container">
                <Navbar language={props.language} setLanguage={props.setLanguage}/>
                <div className="page-container">
                    <Interact 
                        searchKey={props.searchKey} setSearchKey={props.setSearchKey} 
                        refetchSong={refetchSong}
                        checkedID={checkedID} setCheckedID={setCheckedID}
                        setCheckAll={setCheckAll}
                        setPage={props.setPage} setPagesize={props.setPagesize}/>
                    <MusicTable songs={songs.list}
                        total={songs.total}
                        page={props.page} setPage={props.setPage}
                        pagesize={props.pagesize} setPagesize={props.setPagesize}
                        checkedID={checkedID} setCheckedID={setCheckedID}
                        checkAll={checkAll} setCheckAll={setCheckAll}
                        refetch={refetchSong}
                    />
                </div> 
            </div>    
        )
    }
}

export default List