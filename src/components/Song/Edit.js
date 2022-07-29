import "./SCSS/Detail.scss"

import { useState } from "react"
import { Button } from "@mui/material"

import { useEffect } from "react"

import DeleteMusicDialog from "../Overlay/DeleteMusicDialog"

const Edit = (props) => {
    const [info, setInfo] = useState({ musicID: 1, name: "Bài hát số 1", genre: "Music", lastUpdate: "23:15 2022-07-24" })
    const [isOpenDeleteDialog, setOpenDeleteDialog] = useState(false)

    useEffect(()=>{
        console.log(info)
    }, [info])

    return (
        <div className="detail-container">
            <div className="detail-wrapper">
                <h5>Name:</h5>
                <input className="input-name" value={info.name} onChange={event => setInfo({...info, name: event.target.value})}/>
            </div>
            <div className="detail-wrapper">
                <h5>Genre:</h5>
                <input className="input-genre" value={info.genre} onChange={event => setInfo({...info, genre: event.target.value})}/>
            </div>
            <div className="detail-wrapper">
                <h5>Last update:</h5>
                <span>{info.lastUpdate}</span>
            </div>
            <div className="button-wrapper">
                <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }} 
                    onClick={() => props.setPageInfo(prevInfo => { return {...prevInfo, Status: "Play" }})}>
                    Save
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

export default Edit
