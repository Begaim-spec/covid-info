import axios from 'axios'

export const getData = (city) => {
    return (dispatch) => {
        dispatch({type: "DATA_REQUEST"})
        axios(`https://api.covid19api.com/live/country/${city}/status/confirmed`)
            .then(({data}) => {
                dispatch({type: 'DATA_SUCCESS', payload: data})
            })
            .catch((error) => dispatch({type: 'DATA_FAILED', payload: error}))
    }
}
