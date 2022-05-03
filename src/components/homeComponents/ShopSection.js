import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct, productsSort } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("default");
  let history = useHistory();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  useEffect(() => {
    dispatch(productsSort(products, sort));
  }, [pagenumber, dispatch, products, sort]);

  const AddToCartHandle = (e, productId) => {
    e.preventDefault();
    props.history.push(`/cart/${productId}?qty=1`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      history.push(`/search/${value}`);
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            {loading ? (
              <div className="mb-5">
                <Loading />
              </div>
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <>
                <div className="search-container">
                  <div className="search-sort-container">
                    <div className="search-input">
                      <input
                        type="search"
                        className="search"
                        placeholder="Search"
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <button onClick={submitHandler} className="search-button">
                        search
                      </button>
                    </div>

                    <select
                      name="select"
                      className="sort-products"
                      defaultValue={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="default" defaultValue>
                        Default
                      </option>
                      <option value="htl">Higher to lower price</option>
                      <option value="lth">Lower to higher price</option>
                      <option value="rating">Rating</option>
                      <option value="reviews">Number of reviews</option>
                    </select>
                  </div>
                </div>
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product._id}
                  >
                    <div className="border-product">
                      <Link to={`/products/${product._id}`}>
                        <div className="shopBack">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`/products/${product._id}`}>
                            {product.name}
                          </Link>
                        </p>

                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                        <h3>${product.price}</h3>
                        <h4
                          className={
                            product.countInStock > 0
                              ? "is-available"
                              : "not-available"
                          }
                        >
                          {product.countInStock > 0
                            ? "Is available"
                            : "Not available"}
                        </h4>
                      </div>
                    </div>
                    <button
                      onClick={
                        product.countInStock > 0
                          ? (e) => AddToCartHandle(e, product._id)
                          : null
                      }
                      className="product-add-to-cart"
                      disabled={product.countInStock === 0}
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
              </>
            )}

            {/* Pagination */}
            <Pagination
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
