import { ACT_BUY, ACT_DELETE, ACT_UPDATE } from "../constant/actionTypes";

let initialState = []
// lưu giỏ hàng lên localStorage
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
initialState = (shoppingCart != null && shoppingCart.length > 0) ? shoppingCart : initialState;
const listCart = (state = initialState, action) => {
    switch (action.type) {

        case ACT_BUY:
            // console.log(action);
            if (checkExist(state, action.payload.product.productId)) {
                state.forEach(element => {
                    if (element.product.productId === action.payload.product.productId) {
                        element.quantity += action.payload.quantity
                    }
                });
            } else {
                state.push(action.payload)
            }
            saveLocal(state)
            return [...state]

        case ACT_UPDATE:
             
                state.forEach(element => {
                    if (element.product.productId === action.payload.product.productId) {
                        element.quantity = action.payload.quantity
                    }
                });
                saveLocal(state)
                return [...state]
                
        case ACT_DELETE:

            let newarr = state.filter((idDel) => idDel.product.productId !== action.payload)
            saveLocal(newarr)
            return newarr
        default:
            return state
    }

}
export default listCart
const checkExist = (arr, idPro) => {
    let check = false
    arr.forEach(element => {
        if (element.product.productId === idPro) {
            check = true;
        }
    });
    return check
}
const saveLocal = (arr) => {
    localStorage.setItem("shoppingCart", JSON.stringify(arr))
}