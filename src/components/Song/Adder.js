import "./SCSS/Detail.scss"

import { useState } from "react"
import { Button } from "@mui/material"

import { useMutation } from "react-query"
import addNewSong from "../../api-calls/song/addSong"

import DeleteMusicDialog from "../Overlay/DeleteMusicDialog"
import { useNavigate } from "react-router-dom"

import dateFormat from "dateformat"

const Adder = (props) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ song: {name: "", genre: "",vocalist: "", lastUpdate: null}, image: null, audio: null})
    const [isOpenDeleteDialog, setOpenDeleteDialog] = useState(false)

    // Post
    const mutateAddNewSong = useMutation(addNewSong)

    const submitSongHandler = e => {
        e.preventDefault()

        mutateAddNewSong.mutate({ ...formData, song: {...formData.song, lastUpdate: dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss")}},
            {
                onSuccess: (response) => {
                    navigate("/songdetail/status=play/id=" + response.data)
                },
                onError: (error) => {
                    console.log(error); // the error if that is the case
                },
            }
        );
    }

    return (
        <form className="info-container" onSubmit={submitSongHandler}>
            <div className="detail-wrapper">
                <h5>Name:</h5>
                <input className="input-long" required value={formData.song.name} onChange={event => setFormData({...formData, song: {...formData.song, name: event.target.value}})}/>
            </div>
            <div className="detail-wrapper">
                <h5>Genre:</h5>
                <input className="input-medium" required value={formData.song.genre} onChange={event => setFormData({...formData, song: {...formData.song, genre: event.target.value}})}/>
            </div>
            <div className="detail-wrapper">
                <h5>Vocalist:</h5>
                <input className="input-long" required value={formData.song.vocalist} onChange={event => setFormData({...formData, song: {...formData.song, vocalist: event.target.value}})}/>
            </div>
            <div className="detail-wrapper">
                <h5>Image:</h5>
                <input type="file" onChange={event => setFormData({...formData, image: event.target.files[0]})}/>
            </div>
            <div className="detail-wrapper">
                <h5>Audio:</h5>
                <input required type="file" onChange={event => setFormData({...formData, audio: event.target.files[0]})}/>
            </div>
            <div className="button-wrapper">
                <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }} type="submit">
                    Add
                </Button>
            </div>
            {isOpenDeleteDialog && 
                <DeleteMusicDialog onBackdropClick={() => setOpenDeleteDialog(false)} />}
        </form>
    )
}

export default Adder
