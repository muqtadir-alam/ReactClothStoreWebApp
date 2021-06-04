import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./ProductReducer";


export const Reducers = combineReducers({
  AllProducts: ProductReducer,
  product: selectedProductReducer,
     
});