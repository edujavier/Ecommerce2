
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {filterNewsThunk, getNewsThunk, filterHeadlineThunk} from "../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [categoriesList, setCategoriesList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    dispatch(getNewsThunk());

    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategoriesList(res.data.data.categories));
  }, []);

  console.log(categoriesList);

  return (
    <div>
    <h1>Componente Home</h1>
    {categoriesList.map((category) => (
      <Button onClick={() => dispatch(filterNewsThunk(category.id))}>
        {category.name}
      </Button>
    ))}
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <Button
        variant="outline-secondary"
        onClick={() => dispatch(filterHeadlineThunk(inputSearch))}
      >
        Search
      </Button>
    </InputGroup>
    {products.map((productItem) =>(
        <li>
          <Link to={`/product/${productItem.id}`}>
          {productItem.title}
          <br/>
          <img src={productItem.productImgs[0]} style={{ width: 200 }} alt="" srcset="" />

          </Link>
        </li>

    ))}
  </div>
  );
};

export default Home;