
const getCartL = JSON.parse(localStorage.getItem('cart') || "[]");
const initCart = {
    cartItems: getCartL,
    cartNumber: getCartL.length
}
const cartReducer = (state = initCart, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_CART":
            let item = {
                id: action.payload.data.id,
                name: action.payload.data.name,
                image: action.payload.data.image,
                price: action.payload.data.price,
                quantity: +action.payload.quantity

            };
            let checkExist = false;
            state.cartItems.map((item, key) => {
                if (item.id === action.payload.data.id) {
                    state.cartItems[key].quantity += parseInt(action.payload.quantity)
                    checkExist = true;
                }
            })
            if (!checkExist) {
                state.cartItems.push(item);
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
                return {
                    ...state,
                    cartItems: state.cartItems,
                    cartNumber: state.cartNumber + 1
                }
            } else {
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
                return {
                    ...state,
                    cartItems: state.cartItems,

                }
            }


        case "UPDATE_CART":
            state.cartItems.map((item, key) => {
                if (item.id === action.payload.id) {
                    state.cartItems[key].quantity = action.payload.quantity;

                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            return {
                ...state,
                cartItems: state.cartItems,
            }
        case "DELETE_CART":
            state.cartItems.map((item, key) => {
                if (item.id === action.payload) {
                    state.cartItems.splice(key, 1);
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            return {
                ...state,
                cartItems: state.cartItems,
            }
        default:
            return state
    }
}
export default cartReducer;