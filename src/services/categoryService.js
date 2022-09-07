import * as http from '../http/http'
const urlApi = 'http://localhost:3000/category';
export const getAll = async () => {
    try {
        const res = await http.get(urlApi);
        console.log(res)
        return res;
    } catch (error) {
        console.log(error)
    }
}