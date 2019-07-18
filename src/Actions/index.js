import JsonPlaceHolder from '../Apis/JsonPlaceholder';

export const FetchPost = () => async dispatch => {
    const response = await JsonPlaceHolder.get('/posts');

    dispatch({type : "FETCH_POST" , payload : response.data})
};

export const FetchUser = id => async dispatch =>{
    const response = await JsonPlaceHolder.get(`/users/${id}`);

    dispatch({type : "FETCH_USER" , payload : response.data})
}