import { API_URL } from "../api-url"
import dateFormat from "dateformat"

const updateSong = async(data) => {
    let songData = new FormData()
    songData.append("image", data.image)
    songData.append("audio", data.audio)
    songData.append("song", JSON.stringify({
        name: data.name, 
        genre: data.genre, 
        vocalist: data.vocalist,
        lastUpdate: dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss")}))

    return fetch(API_URL + '/song/update/id=' + data.songID, {
        method: "PUT",
        body: songData,
        headers: {
            Accept: "application/json",
        },
    })
    .then(res => res.json())
    .then(data => data )
}

export default updateSong