import { ACT_BUY, ACT_DELETE, ACT_UPDATE } from "../constant/actionTypes";

const initialState = {
    class: "warning",
    message: "Ready to buy"
}
const notify = (state = initialState, action) => {
    switch (action.type) {
        case ACT_BUY:
            state = {
                class: "success",
                message: "Add successful"
            }
           return {...state}
        case ACT_UPDATE:
            state = {
                class: "info",
                message: "Update successful"
            }
            return {...state}
        case ACT_DELETE:
            state = {
                class: "danger",
                message: "Delete successful"
            }
            return {...state}

        default:
            return state
    }
}
export default notify