import "../SCSS/Page.scss"

import { useState } from "react"

import Interact from "../../components/List/Interact.js"
import MusicTable from "../../components/List/MusicTable.js"

const Home = (props) => {
    const [page, setPage] = useState(0)
    const [each, setEach] = useState(10)
    const [searchResult, setSearchResult] = useState([
        {musicID: 1, name: "Bài hát số 1", genre: "Abc"},
        {musicID: 2, name: "Bài hát số 2", genre: "Abc"},
        {musicID: 3, name: "Bài hát số 3", genre: "Abc"},
        {musicID: 4, name: "Bài hát số 4", genre: "Abc"},
        {musicID: 5, name: "Bài hát số 5", genre: "Abc"},
        {musicID: 6, name: "Bài hát số 6", genre: "Abc"},
        {musicID: 7, name: "Bài hát số 7", genre: "Abc"},
        {musicID: 8, name: "Bài hát số 8", genre: "Abc"},
        {musicID: 9, name: "Bài hát số 9", genre: "Abc"},
        {musicID: 10, name: "Bài hát số 10", genre: "Abc"},
        {musicID: 11, name: "Bài hát số 11", genre: "Abc"},
        {musicID: 12, name: "Bài hát số 12", genre: "Abc"},
        {musicID: 13, name: "Bài hát số 13", genre: "Abc"},
        {musicID: 14, name: "Bài hát số 14", genre: "Abc"},
    ])

    const [searchKey, setSearchKey] = useState("")
    const [checkedID, setCheckedID] = useState([])
    const [checkAll, setCheckAll] = useState(false)

    return (
        <div className="page-container">
            <Interact searchKey={searchKey} setSearchKey={setSearchKey} setPageInfo={props.setPageInfo}/>
            <MusicTable searchResult={searchResult} setPageInfo = {props.setPageInfo}
                checkedID={checkedID} setCheckedID={setCheckedID}
                checkAll={checkAll} setCheckAll={setCheckAll}
            />
        </div>
    )
}

export default Home