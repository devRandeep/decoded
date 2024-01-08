import {ADD_TO_CART} from '../Reducers/Constant'

export const addToCart=(data)=>
{
    return{
        data:data,
        type:ADD_TO_CART
    }    
}

