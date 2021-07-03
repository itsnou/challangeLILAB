import {BASE_URL, APP_KEY} from '../utils/commands';
import axios from 'axios';

export const getPost = () => async (dispatch)=>{
    try{
        const posts = await axios.get(`${BASE_URL}/post?page=1&limit=10`, {headers: {'app-id' : APP_KEY}});
        dispatch({type: 'GET_POST', payload: posts.data})
    }catch(err){
        console.log(err);
    };
};

export const getComments = (id) => async (dispatch)=>{
    try{
        const comments = await axios.get(`${BASE_URL}/post/${id}/comment`, {headers: {'app-id' : APP_KEY}});
        dispatch({type: 'GET_COMMENTS', payload: comments.data})
    }catch(err){
        console.log(err);
    };
};


export const getUser = (id) => async (dispatch)=>{
    if(id === false){
        dispatch({type: 'GET_USER', payload:{}})
    }else{
        try{
            const user = await axios.get(`${BASE_URL}/user/${id}`, {headers: {'app-id' : APP_KEY}});
            dispatch({type: 'GET_USER', payload: user.data})
        }catch(err){
            console.log(err);
        };
    }
};


export const getTag = (tag) => async (dispatch)=>{
    try{
        const tags = await axios.get(`${BASE_URL}/tag/${tag}/post?page=0&limit=10`, {headers: {'app-id' : APP_KEY}});
        dispatch({type: 'GET_TAG', payload: tags.data})
    }catch(err){
        console.log(err);
    };
};
