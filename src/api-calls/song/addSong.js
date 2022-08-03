import { API_URL } from "../api-url"
import axios from 'axios'

const addNewSong = async(data) => {
    let res = null

    console.log(data)

    let songData = new FormData()
    songData.append("image", data.image)
    songData.append("audio", data.audio)
    songData.append("song", JSON.stringify(data.song))

    console.log(songData.get("song"))


    fetch(API_URL + '/song/new', {
        method: "POST",
        body: songData,
        headers: {
            Accept: "application/json",
        },
    })
    .then((res) => {
        console.log("Res")
        console.log(res)
        return res.data
    })
}

export default addNewSong