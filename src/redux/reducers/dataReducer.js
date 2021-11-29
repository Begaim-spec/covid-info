const initialState = {
    data: [],
    isLoading: true,
    error: '',

}
export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_REQUEST':
            return {...state, isLoading: true}
        case 'DATA_SUCCESS':
            return {...state, isLoading: false, data: action.payload}
        case
            'DATA_FAILED':
            return {...state, isLoading: false, error: action.payload}
        default:
            return state
    }
}