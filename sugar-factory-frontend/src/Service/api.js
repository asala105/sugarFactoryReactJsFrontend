import axios from 'axios';
// import CookieService from './Service/CookieService';

const BASE_URL = 'http://127.0.0.1:8000/api';

const cookie = localStorage.getItem('access_token');

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + cookie
    },
}

export default{

    checkLogin: (login) =>
    axios.post(`${BASE_URL}/login`,login),

    viewAllMessages: () =>
    axios.get(`${BASE_URL}/view_all_messages`, token),

    viewAllUsers: () =>
    axios.get(`${BASE_URL}/view_all_users`, token),

    viewAllPictures: () =>
    axios.get(`${BASE_URL}/view_all_pics`, token),

    approveMessage: (id) => 
    axios.get(`${BASE_URL}/approve_message/${id}`,token),

    approvePicture: (id) => 
    axios.get(`${BASE_URL}/approve_pic/${id}`,token),

    highlightUser: (id) => 
    axios.get(`${BASE_URL}/highlight_user/${id}`,token),

    declineMessage: (id) => 
    axios.delete(`${BASE_URL}/decline_message/${id}`,token),

    declinePicture: (id) => 
    axios.delete(`${BASE_URL}/decline_pic/${id}`,token),

    removeHighlight: (id) => 
    axios.get(`${BASE_URL}/remove_highlight/${id}`,token),

    logout: () =>
    axios.get(`${BASE_URL}/logout`, token)
}