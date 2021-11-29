import axios from 'axios'

export const getCountries = () => {
    return (dispatch) => {
        dispatch({type: "COUNTRY_REQUEST"})
        axios('https://api.covid19api.com/countries')
            .then(({data}) => {
                dispatch({type: 'COUNTRY_SUCCESS', payload: data})
            })
            .catch((error) => dispatch({type: 'COUNTRY_FAILED', payload: error}))
    }
}
