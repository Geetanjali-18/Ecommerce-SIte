import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { Button } from "@mui/material";
import { BsCart4 } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function ProductDetails() {
  const [activeSize, setactiveSize] = useState(null);
  const isActive = (index) => {
    setactiveSize(index);
  };
  return (
    <section className="productDetails section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ProductZoom></ProductZoom>
          </div>

          <div className="col-md-7">
            <h2 className="hd text-capitalize">Apple 2023 MacBook Pro</h2>
            <ul className="list list-inline d-flex align-items-left">
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="text mr-2">Brands</span>
                  <span>Apple</span>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <Rating
                    name="read-only"
                    value={4.5}
                    size="small"
                    precision={0.5}
                    readOnly
                  />
                  <span className="text-light cursor ml-2">1 Review</span>
                </div>
              </li>
            </ul>
            <div className="d-flex info mb-3">
              <span className="oldPrice">$20.00</span>
              <span className="netPrice text-danger ml-2">$14.00</span>
            </div>

            <span className="bg-success badge">In Stock</span>
            <p className="mt-3">
              Apple 2023 MacBook Pro (14-inch, Apple M3 Pro chip with 11-core
              CPU and 14-core GPU, 18GB Unified Memory, 512GB) - Space Black
            </p>

            <div className="productSize d-flex align-items-center">
              <span>Size / Weight:</span>
              <ul className="list list-inline mb-0 pl-4">
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 0 ? "active" : ""}`}
                    onClick={() => isActive(0)}
                  >
                    50g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 1 ? "active" : ""}`}
                    onClick={() => isActive(1)}
                  >
                    100g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 2 ? "active" : ""}`}
                    onClick={() => isActive(2)}
                  >
                    200g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 3 ? "active" : ""}`}
                    onClick={() => isActive(3)}
                  >
                    300g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag  ${activeSize === 4 ? "active" : ""}`}
                    onClick={() => isActive(4)}
                  >
                    500g
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center mt-4">
              <QuantityBox></QuantityBox>
              <Button className="btn-blue btn-lg btn-big btn-round">
                <BsCart4 className="mr-2 ml-1" />
                Add to Cart
              </Button>

              <Tooltip title="Add to my Wishlist" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                  <FaHeart></FaHeart>
                </Button>
              </Tooltip>
              <Tooltip title="Add to Compare" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                  <MdOutlineCompareArrows />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>

        <br />

        <div className="card mt-5 p-5 productDetailsTabs">
          <div className="customTabs">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 0 && "active"}`}
                  onClick={() => setActiveTabs(0)}
                >
                  Description
                </Button>
              </li>

              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 1 && "active"}`}
                  onClick={() => setActiveTabs(1)}
                >
                  Additional Info
                </Button>
              </li>

              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 2 && "active"}`}
                  onClick={() => {
                    setActiveTabs(2);
                    showReviews();
                  }}
                >
                  Reviews (3)
                </Button>
              </li>
            </ul>

            <br />

            {activeTabs === 0 && (
              <div className="tabContent">
                <p>
                  Mac, short for Macintosh (its official name until 1999), is a
                  family of personal computers designed and marketed by Apple.
                  The name Macintosh is a reference to a type of apple called
                  McIntosh. The product lineup includes the MacBook Air and
                  MacBook Pro laptops, and the iMac, Mac Mini, Mac Studio, and
                  Mac Pro desktops. Macs are sold with the macOS operating
                  system; the latest release is macOS 15 Sequoia.
                </p>
              </div>
            )}

            {activeTabs === 0 && (
              <div className="tabContent">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr className="stand-up">
                        <td>
                          <p>53''L x 24''W.....</p>
                        </td>
                      </tr>
                      <tr className="flodeed-wo-wheels">
                        <td>
                          <p>53''L x 24''W.....</p>
                        </td>
                      </tr>
                      <tr className="folded-w-wheels">
                        <td>
                          <p>53''L x 24''W.....</p>
                        </td>
                      </tr>
                      <tr className="door-pass-through">
                        <td>
                          <p>53''L x 24''W.....</p>
                        </td>
                      </tr>

                      <tr className="frame">
                        <td>
                          <p>53''L x 24''W.....</p>
                        </td>
                      </tr>
                      <tr className="door-pass-through">
                        <td>
                          <p>53''L x 24''W.....</p>
                        </td>
                      </tr>
                      <tr className="door-pass-through">
                        <td>
                          <p>53''L x 24''W.....</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTabs === 2 && (
              <div className="tabContent">
                <div className="row">
                  <div className="col-md-3">
                    <h3>Customer Questions & Answers</h3>
                    <br />

                    {reviewsArr.length != 0 &&
                      reviewsArr != undefined &&
                      reviewsArr.map((item, index) => {
                        return (
                          <div
                            className="card p-4 reviewsCard flex-row"
                          >
                            <div className="image">
                              <div className="rounded-circle">
                                <img></img>
                              </div>
                              <span className="text-g d-block text-center font-weight-bold">
                                Geetanjali
                              </span>
                            </div>

                            <div className="info pl-5">
                              <div className="d-flex align-items-center w-100">
                                <h5>17-10-2024</h5>
                                <div className="ml-auto">
                                    <Rating name="half-rating-read" value={4}
                                    precision={0.5} readOnly>

                                    </Rating>
                                </div>
                              </div>
                              <p>
                              lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                              lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
