import "./SCSS/Page.scss"

import { useState } from "react"

import Navbar from "../components/Navbar.js"
import List from "./tabs/List.js"
import Song from "./tabs/Song.js"
import Add from "./tabs/Add.js"


const Home = () => {
    const [pageInfo, setPageInfo] = useState({Status: "List", ID: 0})

    return (
        <div className="page-container">
            <Navbar pageInfo={pageInfo} setPageInfo={setPageInfo}/>
            {pageInfo.Status === "List" && <List setPageInfo={setPageInfo}/>}
            {(pageInfo.Status === "Play" || pageInfo.Status === "Edit") 
            && <Song pageInfo={pageInfo} setPageInfo={setPageInfo}/>}
            {pageInfo.Status === "Add" && <Add setPageInfo={setPageInfo}/>}
        </div>
    )
}

export default Home