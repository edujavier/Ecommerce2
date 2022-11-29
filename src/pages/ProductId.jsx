import React, { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsThunk } from "../store/slices/products.slice";
const ProductId = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const productsList = useSelector((state) => state.products);

  const productsFound = productsList.find((productsItem) => productsItem.id === Number(id));
  const relatedProducts = productsList.filter(
    (productsItem) =>
      productsItem?.category.id === productsFound?.category.id &&
      productsItem.id !== productsFound.id
  );

  console.log(relatedProducts);

  return (
    <div>
      <h1>{productsFound?.title}</h1>
      {/*<p>By: {newsFound?.author}</p>
    <p>{newsFound?.date}</p>*/}
      <Row>
        {/* DESCRIPCION DE NOTICIA */}
        {/*<Col lg={9}>
        <img src={productsFound?.productImgs} alt="" className="img-fluid" />
        <p className="text-muted">{productsFound?.image_description}</p>
        {newsFound?.body.map((p) => (
          <p key={p.id}>{p.paragraph}</p>
        ))}
        </Col>*/}

        {/* NOTICIAS RELACIONADAS */}
        <Col lg={3}>
          <h3>Related Products:</h3>
          <ListGroup variant="flush">
            {relatedProducts.map((productsItem) => (
              <ListGroup.Item key={productsItem.id}>
                <Link to={`/product/:id${productsItem.id}`}>
                  <img src={productsItem?.productImgs} alt="" className="img-fluid" />
                  {productsItem.title}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductId;