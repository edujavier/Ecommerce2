import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk());
  }, [])

  const cartss = useSelector(state => state.cart)
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartss.map(carts => (
          <div>{carts.title}</div>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;