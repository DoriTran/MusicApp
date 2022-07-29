import "./SCSS/Detail.scss"

import { useState } from "react"
import { Button } from "@mui/material"

import { useEffect } from "react"

import DeleteMusicDialog from "../Overlay/DeleteMusicDialog"

const Adder = (props) => {
    const [formData, setFormData] = useState({ name: "", genre: "", lastUpdate: "23:15 2022-07-24" })
    const [isOpenChooseFile, setOpenChooseFile] = useState(false)

    useEffect(()=>{
        console.log(formData)
    }, [formData])

    return (
        <div className="detail-container">
            <div className="detail-wrapper">
                <h5>Name:</h5>
                <input className="input-name" value={formData.name} onChange={event => setFormData({...formData, name: event.target.value})}/>
            </div>
            <div className="detail-wrapper">
                <h5>Genre:</h5>
                <input className="input-genre" value={formData.genre} onChange={event => setFormData({...formData, genre: event.target.value})}/>
            </div>
            <div className="detail-wrapper">
                <input type="file"/>
            </div>
            <div className="button-wrapper">
                <Button variant="contained" style={{ backgroundColor: "#d3dbdc", color: "black" }} 
                    onClick={() => props.setPageInfo(prevInfo => { return {...prevInfo, Status: "List" }})}>
                    Add
                </Button>
            </div>
            {isOpenChooseFile && 
                <DeleteMusicDialog onBackdropClick={() => isOpenChooseFile(false)} />}
        </div>
    )
}

export default Adder
