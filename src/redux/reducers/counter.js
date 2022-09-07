
const counterReducer = (state = 100, action) => {
    switch (action.type) {
        case "TANG":
            return state.value + 1


        case "Giam":
            return state.value - 1

        default:
            return state
    }
}
export default counterReducer;