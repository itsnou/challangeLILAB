const initialState={
    posts:[],
    comments:[],
    user:{},
    postsByTags:[],
}

const socialMedia = (state=initialState, {type,payload}) =>{
    switch(type){
        case 'GET_POST':
            return{
                ...state,
                post: payload.data
            }
        case 'GET_COMMENTS':
            return{
                ...state,
                comments:payload.data
            }
        case 'GET_USER':
            return{
                ...state,
                user:payload
            }
        case 'GET_TAG':
            return{
                ...state,
                postsByTags: payload.data,
            }
        default:
            return state;
    }
};

export default socialMedia;