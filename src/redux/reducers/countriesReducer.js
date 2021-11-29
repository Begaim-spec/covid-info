const initialState = {
    country: [],
    isLoading: true,
    error: ''
}
export const countriesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'COUNTRY_REQUEST':
            return {...state, isLoading: true}
        case 'COUNTRY_SUCCESS':
            return {...state, isLoading: false, country: action.payload}
        case 'COUNTRY_FAILED' :
            return  {...state, isLoading: false, error: action.payload}
        default:
            return state
    }
}