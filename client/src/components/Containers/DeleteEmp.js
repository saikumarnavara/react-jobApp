import axios from 'axios'
import { deleteEmp } from '../../service/apiUrls'
export const DeleteEmp = (id) => {
    try {
        axios.delete(deleteEmp.url + `/${id}`)
        // axios.delete(`http://localhost:4001/deleteemployees/${id}`)
    } catch (err) {
        console.log(err)
    }
}
