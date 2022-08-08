import "./SCSS/Detail.scss"

import { useState } from "react"
import { Button } from "@mui/material"

import DeleteMusicDialog from "../Overlay/DeleteMusicDialog"

import { API_URL } from "../../api-calls/api-url"

import { useEffect } from "react"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

import updateSong from "../../api-calls/song/updateSong"

import dateFormat from "dateformat"

const Edit = (props) => {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState(() => {
        return {...props.song, image: null, audio: null,}
    })
    const [isOpenDeleteDialog, setOpenDeleteDialog] = useState(false)

    const mutateEditSong = useMutation(updateSong)

    useEffect(() => {
        if (mutateEditSong.isSuccess) {
            console.log("refect")
            props.refetchDetail()
            navigate("/songdetail/status=play/id=" + props.song.songID)
        }
    }, [mutateEditSong.isSuccess])

    const submitSongHandler = e => {
        e.preventDefault()
        mutateEditSong.mutate(formData)
    }

    return (
        <form className="detail-container" onSubmit={submitSongHandler}>
            <div className="image-container">
                <img src={API_URL + "/file/image/id=" + props.song.songID + "?" + new Date().getTime()} alt="song"/>
            </div>
            <div className="info-container">
                <div className="detail-wrapper">
                    <h5>Name:</h5>
                    <input value={formData.name} onChange={event => setFormData({...formData, name: event.target.value})}/>
                </div>
                <div className="detail-wrapper">
                    <h5>Genre:</h5>
                    <input value={formData.genre} onChange={event => setFormData({...formData, genre: event.target.value})}/>
                </div>
                <div className="detail-wrapper">
                    <h5>Vocalist:</h5>
                    <input value={formData.vocalist} onChange={event => setFormData({...formData, vocalist: event.target.value})}/>
                </div>
                <div className="detail-wrapper">
                    <h5>Image:</h5>
                    <input type="file" onChange={event => setFormData({...formData, image: event.target.files[0]})}/>
                </div>
                <div className="detail-wrapper">
                    <h5>Audio:</h5>
                    <input type="file" onChange={event => setFormData({...formData, audio: event.target.files[0]})}/>
                </div>
                <div className="detail-wrapper">
                    <h5>Last update:</h5>
                    <span>{dateFormat(formData.lastUpdate)}</span>
                </div> 
                <div className="button-wrapper">
                    <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }} type="submit">Save</Button>
                    <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }} 
                        onClick={() => setOpenDeleteDialog(true)}>
                        Delete
                    </Button>
                </div>    
            </div>
            
            {isOpenDeleteDialog && 
                <DeleteMusicDialog music={props.song} onBackdropClick={() => setOpenDeleteDialog(false)}/>}
        </form>
    )
}

export default Edit
