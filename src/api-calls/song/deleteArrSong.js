import { API_URL } from "../api-url"
import axios from 'axios'

const deleteArrSong = async(arrID) => {
    let res = null
    try {
        res = await axios({
            method: 'delete',
            url: API_URL + '/song/delete/allByArrId',
            data: arrID
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default deleteArrSong