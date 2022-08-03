import { API_URL } from "../api-url"
import axios from 'axios'

const deleteSong = async(songID) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + '',
            data: songID
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default deleteSong