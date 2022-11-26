import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getNewsThunk } from "../store/slices/products.slice";
const ProductId = () => {
  
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  const productsList = useSelector((state) => state.products);

  const productsFound = productsList.find((productsItem) => productsItem.id === Number(id));
  const relatedProducts = productsList.filter(
    (productsItem) => productsItem.category.id === productsFound.category.id
  );

  console.log(relatedProducts);

  return (
    <div>
      <h1>Componente ProductId</h1>
      <h1>{productsFound?.title}</h1>
      <img src={productsFound?.productImgs} alt="" srcset="" />
      <h3>Related Products:</h3>
      {relatedProducts.map((productsItem) =>(
        <li>
          <Link to={`/product/${productsItem.id}`}>{productsItem.title}</Link>
        </li>
      ))}


    </div>
  );
};

export default ProductId;