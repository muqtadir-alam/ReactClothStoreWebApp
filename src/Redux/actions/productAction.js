import ActionType from "../contants/ActionType"

  export const setProducts = (products) => {
    
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
    };
};


export const SelectedProduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product,

    };
        
};

