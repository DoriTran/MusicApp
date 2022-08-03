import { API_URL } from "../api-url"
import axios from 'axios'

const getSong = async(fetchData) => {
    let res = null

    if (isNaN(fetchData.page) || isNaN(fetchData.pagesize)) {
        fetchData.page = 0
        fetchData.pagesize = 0
    }

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