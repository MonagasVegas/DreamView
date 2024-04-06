import axios from 'axios'
import { urlFetch } from '../constants'

export const getFilms = () => {
    return axios({
        method: 'GET',
        url: `${urlFetch}`
    })
}