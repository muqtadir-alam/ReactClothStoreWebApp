import axios from "axios";
import React from "react";
import {useEffect} from 'react'
import {setProducts} from "../Redux/actions/productAction"
import { ProductComponent } from "./ProductComponent";
import { useDispatch } from "react-redux";
 

export const ProductList = () => {
    
    
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios.get(" https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("err is ", err)
            });
        dispatch(setProducts(response.data));
    };

    
    useEffect(() => {
        fetchProducts();
    }, );
    
    
    return (
        <div className="ui grid container" >
            
               <ProductComponent/>
            </div>
        
    )
}