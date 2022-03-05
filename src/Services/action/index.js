import { MAKE_LOGIN, MAKE_SIGNUP, SORT_DATA, ITEM_DATA, COUNT_DATA, RESET_CART } from "../Contants";

export const createLogin = (data) => {
    return {
        type: MAKE_SIGNUP,
        data: data
    }
}

export const sortingData = (data) => {
    return {
        type: SORT_DATA,
        data: data
    }
}

export const createItem = (data) => {
    return {
        type: ITEM_DATA,
        data: data
    }
}

export const createCount = (data) => {
    return {
        type: COUNT_DATA,
        data: data
    }
}

export const resetCart = (data) => {
    return {
        type: RESET_CART,
        data: data
    }
}