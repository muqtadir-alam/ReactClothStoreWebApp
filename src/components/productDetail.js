import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SelectedProduct } from "../Redux/actions/productAction";

export const Productdetail = () => {
  const product = useSelector((state) => state.product);
  
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  

  const fetchProductDetail = async () => {
    const response = await axios
      .get(` https://fakestoreapi.com/products/ ${productId} `)
      .catch((err) => {
        console.log("err is ", err);
      });
      dispatch( SelectedProduct (response.data));
     
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">and</div>
            <div className="middle aligned row">
              <div className="column rp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label"> ${price}</a>
                </h2>
                <h3 className="ui brown black header">${category} </h3>
                <p>{description} </p>
                <div className="ui vertical animated button " tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
