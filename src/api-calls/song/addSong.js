import { API_URL } from "../api-url"

const addNewSong = async(data) => {
    let songData = new FormData()
    songData.append("image", data.image)
    songData.append("audio", data.audio)
    songData.append("song", JSON.stringify(data.song))

    return fetch(API_URL + '/song/new', {
        method: "POST",
        body: songData,
        headers: {
            Accept: "application/json",
        },
    })
    .then(res => res.json())
    .then(data => data )
}

export default addNewSong