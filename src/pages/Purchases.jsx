import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getPurchasesThunk } from "../store/slices/purchases.slice";
const Purchases = () => {
  const dispatch = useDispatch();

  const purchases = useSelector((state) => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);
  return (
    <div>
      <h1>Purchases</h1>
      <ul key={purchases.id}>
        {purchases.map((purchase) => (
          <li key={purchase.id}>
            <Link to={`/purchases/${purchase.purchases?.id}`}>
              {purchase.cart.products.map(product =>(
                <li>
                  <h3><b>Product:</b>{product.title}</h3>
                  <h3><b>Price: </b>{product.price}</h3>
                  <h3><b>Purchase Date: </b>{product.createdAt}</h3>
                </li>
              ))}
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Purchases;