import { API_URL } from "../api-url"
import axios from 'axios'

const deleteMusic = async(musicID) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + '',
            data: musicID
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default deleteMusic