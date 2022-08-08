import "./SCSS/Detail.scss"

import { useState } from "react"
import { Button } from "@mui/material"

import { Link } from "react-router-dom"

import DeleteMusicDialog from "../Overlay/DeleteMusicDialog"

import {API_URL } from "../../api-calls/api-url"

import dateFormat from "dateformat"

const Play = (props) => {
    const [isOpenDeleteDialog, setOpenDeleteDialog] = useState(false)

    return (
        <div className="detail-container">
            <div className="image-container">
                <img src={API_URL + "/file/image/id=" + props.song.songID + "?" + new Date().getTime()} alt="song"/>               
            </div>
            <div className="info-container">
                <div className="detail-wrapper">
                    <h5>Name:</h5>
                    <span>{props.song.name}</span>
                </div>
                <div className="detail-wrapper">
                    <h5>Genre:</h5>
                    <span>{props.song.genre}</span>
                </div>
                <div className="detail-wrapper">
                    <h5>Vocalist:</h5>
                    <span>{props.song.vocalist}</span>
                </div>
                <div className="detail-wrapper">
                    <h5>Last update:</h5>
                    <span>{dateFormat(props.song.lastUpdate)}</span>
                </div>
                <div className="button-wrapper">
                    <Link to={"/songdetail/status=edit/id=" + props.song.songID}>
                        <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }}>Edit</Button>
                    </Link>
                    <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }} 
                        onClick={() => setOpenDeleteDialog(true)}>
                        Delete
                    </Button>
                </div>
            </div>
            {isOpenDeleteDialog && 
                <DeleteMusicDialog music={props.song} onBackdropClick={() => setOpenDeleteDialog(false)}/>}
        </div>
    )        


}

export default Play
