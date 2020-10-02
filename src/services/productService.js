import http from './httpServices';
import { baseUrl } from '../api.json';




function getAllProducts(endPoint) {
    return http.get(baseUrl + endPoint)
}

export { getAllProducts };