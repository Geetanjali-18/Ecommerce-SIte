import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import {Button} from "@mui/material";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from "../ProductModel";

export default function ProductItem(props) {
  const [value, setvalue] = useState(2);
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const viewProductModal = (id) => {
    setisOpenProductModal(true);
  };
  const closeProductModal = ()=>{
    setisOpenProductModal(false);
  }
  return (
    <>
      <div className={`item productItem mb-2 ${props.itemView}`}>
        <div className="imgWrapper">
          <img src={props.imageAddress} className=""></img>
          {/* <span className="badge badge-primary">28%</span> */}
          <div className="actions">
            <Button onClick={() => viewProductModal(1)}>
              <SlSizeFullscreen />
            </Button>
            <Button>
              <FaRegHeart />
            </Button>
          </div>
        </div>
        <div className="info">
          <h6>
            Apple 2023 MacBook Pro (14-inch, Apple M3 Pro chip with 11-core CPU
            and 14-core GPU, 18GB Unified Memory, 512GB) - Space Black
          </h6>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-1 mb-1"
            name="read-only"
            value={value}
            size="small"
            precision={0.5}
            readOnly
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$14.00</span>
          </div>
        </div>
      </div>

      {isOpenProductModal === true && <ProductModal closeProductModal={closeProductModal}></ProductModal>}
    </>
  );
}
