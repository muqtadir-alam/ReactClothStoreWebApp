import { ActionType } from "../contants/ActionType";

const initialState = {
    Products: [],
};

export const ProductReducer = (state= initialState, {type, payload}) => {
    
    switch (type)
    {
        case ActionType.SET_PRODUCTS:
            return { ...state  , Products:payload};
        default:
            return state;
    }
}
const initial = {
    Product: [],
 }

export const selectedProductReducer = (state=initial , {type, payload}) => {
    
    switch (type)
    {
        case ActionType.SELECTED_PRODUCT:
            return { ...state , ...payload};
        default:
        return state;
    }
}