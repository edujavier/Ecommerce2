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
      <ul>
        {purchases.map((purchase) => (
          <li key={purchase.id}>
            <Link to={`/purchases/${purchase.purchases?.id}`}>
              {purchase.purchase?.title}
              <img src={purchase.purchases?.productImgs} className="img-fluid" alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Purchases;