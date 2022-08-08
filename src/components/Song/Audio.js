import "./SCSS/Audio.scss"
import { API_URL } from "../../api-calls/api-url"

import { useState, useEffect } from "react"

const Audio = (props) => {
    return (
        <audio key={props.songID} autoPlay controls className="audio-style">
            <source src={API_URL + "/file/audio/id=" + props.songID + "?" + new Date().getTime()} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    )
}

export default Audio
