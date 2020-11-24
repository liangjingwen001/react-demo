export const SET_TOKEN = 'SET_TOKEN';

export const setToken = (text) => (dispatch) => {
    dispatch({
        type: SET_TOKEN,
        payload: text
    })
}