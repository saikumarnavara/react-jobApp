import axios from 'axios'

export const api = (url, type, data) => {
    return axios({
        url: url,
        type: type,
        data: data,
        crossDomain: true,
        headers: {
            "Content-Type": " application/json",
        }
    })
}
