import "../SCSS/Page.scss"

import { Alert, CircularProgress } from "@mui/material"

import Navbar from "../../components/Navbar.js"
import Audio from "../../components/Song/Audio"
import TabHeader from "../../components/TabHeader"
import Play from "../../components/Song/Play"
import Edit from "../../components/Song/Edit"

import { useParams } from 'react-router-dom'
import { useQuery } from "react-query"
import { useState, useEffect } from "react"
import getSongDetail from "../../api-calls/song/getSongDetail"
import getSongAudio from "../../api-calls/song/getSongAudio"

const Song = (props) => {    
    const { status, id } = useParams()

    // Query data
    const { isLoading: isDetailLoading, isError: isDetailError, refetch: refetchDetail, data: song}
        = useQuery('getSongDetail', () => getSongDetail(id))

    const { isLoading: isAudioLoading, isError: isAudioError, isSuccess: isAudioSuccess, refetch: refetchAudio, data: audio}      
        = useQuery('getSongAudio', () => getSongAudio(id))  

    if (isDetailLoading || isAudioLoading) {
        return <div className="page-container"><CircularProgress size={'150px'}/></div>
    } else if (isDetailError || isAudioError) {
        return <div className="page-container"><Alert severity="error">Error getting song data</Alert></div>
    } else {
        return (
            <div div className="page-container">
                <Navbar language={props.language} setLanguage={props.setLanguage} backButton/>
                <div className="tab-container">
                    <Audio audio={audio} songID={song.data.songID} songAudio={song.data.audio} status={status}/>
                    <TabHeader content="Song Details"/>
                    {status === "play" && <Play song={song.data} />}
                    {status === "edit" && <Edit song={song.data} refetchDetail={refetchDetail} refetchAudio={refetchAudio}/>}
                </div>
            </div>

        )
    }
}

export default Song