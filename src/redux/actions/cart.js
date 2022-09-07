export const addToCart = (data, quantity = 1) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            data,
            quantity
        }
    }
}

export const updateCart = (data) => {
    return {
        type: "UPDATE_CART",
        payload: data
    }
}
export const deleteCart = (id) => {
    return {
        type: "DELETE_CART",
        payload: id
    }
}