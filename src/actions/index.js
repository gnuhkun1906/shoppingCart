import { ACT_BUY, ACT_DELETE, ACT_UPDATE } from "../constant/actionTypes";

export const addToCart=(product,quantity)=>{
    return {
        type:ACT_BUY,
        payload:{product,quantity}
    }
}
export const delToCart=(productId)=>{
    
    return {
        type:ACT_DELETE,
        payload:productId
    }
}
export const updateToCart=(product,quantity)=>{
    return {
        type:ACT_UPDATE,
        payload:{product,quantity}
    }
}