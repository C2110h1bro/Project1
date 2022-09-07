import * as http from '../http/http';

const urlApi = 'http://localhost:3000/product';
export const getAll = async () => {
    try {
        const res = await http.get(urlApi);

        return res;
    } catch (error) {
        console.log(error)
    }
}

export const find = async (id) => {
    try {
        const res = http.get(`${urlApi}/${id}`);
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const findByCategory_id = async (id, page = 1) => {
    try {
        const res = http.get(`${urlApi}?category_id=${id}&_page=${page}&_limit=3`);
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const fillter = (keyword) => {
    try {
        const res = http.get(`${urlApi}?name_like=${keyword}&_limit=4`);
        return res;
    } catch (error) {
        console.log(error)
    }

}
export const create = async (data) => {
    // try {
    //     const res = http.post(`${urlApi}`, data);
    //     return res;
    // } catch (error) {
    //     console.log(error)
    // }
}
