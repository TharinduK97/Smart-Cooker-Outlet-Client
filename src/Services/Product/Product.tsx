import axios from "axios";

export const getProducts = () => {
    return axios.get('https://my.api.mockaroo.com/product.json?key=240c4c80')
};