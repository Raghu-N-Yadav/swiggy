import { MAKE_LOGIN, MAKE_SIGNUP, SORT_DATA, ITEM_DATA, COUNT_DATA, RESET_CART } from "../Contants";

const intialState = {
    signupData: [],
    sortedData: [1],
    itemData: []

}

export default function SwiggyReducer(state = intialState, action) {
    switch (action.type) {
        case MAKE_SIGNUP:
            return {
                ...state,
                signupData: [...state.signupData, { ...action.data }]
            }
        case SORT_DATA:
            return {
                ...state,
                sortedData: action.data
            }
        case ITEM_DATA:
            return {
                ...state,
                itemData: [...state.itemData, { ...action.data }]
            }
        case COUNT_DATA:
            return {
                ...state,
                itemData: [...state.itemData.filter(obj => obj.title !== action.data.title), { ...action.data }]
            }
        case RESET_CART:
            return {
                ...state,
                itemData: action.data
            }
        default:
            return state
    }
}