import { combineReducers } from "redux";
import listCart from "./cart";
import listProduct from "./listproduct";
import notify from "./notify";
const reducer=combineReducers({listCart,listProduct,notify})
export default reducer