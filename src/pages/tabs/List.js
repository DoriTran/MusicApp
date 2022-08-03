import "../SCSS/Page.scss"

import { useState } from "react"

import { Alert, CircularProgress } from "@mui/material"

import Interact from "../../components/List/Interact.js"
import MusicTable from "../../components/List/MusicTable.js"

import { useQuery } from "react-query"
import getSong from "../../api-calls/song/getSong"


const Home = (props) => {
    // Page state
    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(10)
    const [searchKey, setSearchKey] = useState("")

    // Functional state
    const [checkedID, setCheckedID] = useState([])
    const [checkAll, setCheckAll] = useState(false)

    // Query data
    const { isLoading, isError, refetch, data: songs} 
        = useQuery('getSong', () => getSong({page: page, pagesize: pagesize, searchKey: searchKey}))

    if (isLoading) {
        return <div className="page-container"><CircularProgress size={'150px'}/></div>
    } else if (isError) {
        return <div className="page-container"><Alert severity="error">Error getting song data</Alert></div>
    } else {
        return (
            <div className="page-container">
                <Interact searchKey={searchKey} setSearchKey={setSearchKey} setPageInfo={props.setPageInfo}/>
                <MusicTable songs={songs} setPageInfo = {props.setPageInfo}
                    page={page} setPage={setPage}
                    pagesize={pagesize} setPagesize={setPagesize}
                    checkedID={checkedID} setCheckedID={setCheckedID}
                    checkAll={checkAll} setCheckAll={setCheckAll}
                    refetch={refetch}
                />
            </div>
        )
    }
}

export default Home