import { API_URL } from "../api-url"
import axios from 'axios'

const getSongAudio = async(id) => {
    let res = null
    try {
        res = await axios({
            method: 'get',
            url: API_URL + "/file/audio/bytearray/id=" + id
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default getSongAudio