import axios from 'axios';

export const setFavorite = (userId) => {
    return axios.post(`http://localhost:5000/favoriteUsers/setFavorite/${userId}`)
}

export const getAllFavoriteUsers = (userId) => {
    return axios.get(`http://localhost:5000/favoriteUsers/`)
}
