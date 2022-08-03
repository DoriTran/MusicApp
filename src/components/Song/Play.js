import "./SCSS/Detail.scss"

import { useState } from "react"
import { Button } from "@mui/material"

import DeleteMusicDialog from "../Overlay/DeleteMusicDialog"

const Play = (props) => {
    const [info, setInfo] = useState({ songID: 1, name: "Bài hát số 1", genre: "Music", lastUpdate: "23:15 2022-07-24" })
    const [isOpenDeleteDialog, setOpenDeleteDialog] = useState(false)

    return (
        <div className="detail-container">
            <div className="detail-wrapper">
                <h5>Name:</h5>
                <span>{info.name}</span>
            </div>
            <div className="detail-wrapper">
                <h5>Genre:</h5>
                <span>{info.genre}</span>
            </div>
            <div className="detail-wrapper">
                <h5>Last update:</h5>
                <span>{info.lastUpdate}</span>
            </div>
            <div className="button-wrapper">
                <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }} 
                    onClick={() => props.setPageInfo(prevInfo => { return {...prevInfo, Status: "Edit" }})}>
                    Edit
                </Button>
                <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }} 
                    onClick={() => setOpenDeleteDialog(true)}>
                    Delete
                </Button>
            </div>
            {isOpenDeleteDialog && 
                <DeleteMusicDialog music={info} onBackdropClick={() => setOpenDeleteDialog(false)}
                    setPageInfo={props.setPageInfo}/>}
        </div>
    )
}

export default Play
