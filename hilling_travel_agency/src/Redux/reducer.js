import { FETCH_ERROR, FETCH_REQUEST, FETCH_REVIEWS, FETCH_SUCCESS, FETCH_USER } from "./actiontypes";

const initialState = {
    isLoading: false,
    isError: false,
    reviews: [],
    destination: {},
    user: {},
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:{
            return {
                ...state,
                isLoading:true,
                destination:[]
            };
        }
        case FETCH_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                destination: action.payload
            };
        }
        case FETCH_ERROR:{
            return {    
                ...state,
                isLoading: false,
                destination:[],
                isError: true
            };
        }

        case FETCH_USER:{
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        }
        case FETCH_REVIEWS:{
            return {
                ...state,
                isLoading:true,
                reviews: action.payload,
            }
        }

        default:
            return state;
    }
}

export default reducer;