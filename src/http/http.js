import axios from "axios";

const http = axios.create();

export const get = async (url, config = {}) => {
    const response = await http.get(url, config);

    return response.data;
}

export const post = async (url, data) => {
    const response = await http.post(url, data);

    return response.data;
}
export const put = async (url, data) => {
    const response = await http.put(url, data);

    return response.data;
}
export default http;