import { API_URL } from "../api-url"
import axios from 'axios'

const getSong = async(fetchData) => {
    let res = null
    console.log("getSong:")
    console.log(fetchData)
    try {
        res = await axios({
            method: 'get',
            url: API_URL + '/song/page=' + fetchData.page + '/pagesize=' + fetchData.pagesize + '/searchkey=' + fetchData.searchKey,
        })
        return res.data
    } catch (err) {
        throw(alert(new Error(err.response.data.message)))
    }
}

export default getSong