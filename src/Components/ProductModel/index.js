import { Dialog } from "@mui/material";
import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoom";

export default function ProductModal(props) {
  
  const [value, setvalue] = useState(2);
  const [isOpenModal, setisOpenModal] = useState(true);

  
  return (
    <div>
      <Dialog
        open={true}
        onClose={() => props.closeProductModal()}
        className="productModal"
      >
        <Button className="close__" onClick={() => props.closeProductModal()}>
          <IoMdClose></IoMdClose>
        </Button>
        <h4 className="mb-2 font-weight-bold">
          Apple 2023 MacBook Pro - Space Black
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-3">
            <span>Brands</span>
            <span className="ml-2">
              <b>APPLE</b>
            </span>
          </div>

          <Rating
            className="mt-1 mb-1"
            name="read-only"
            value={value}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>

        <hr></hr>
        <div className="row mt-2 productModalDetail">
          <div className="col-md-5">
           <ProductZoom></ProductZoom>
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice mr-3">$935</span>
              <span className="netPrice text-danger">$460</span>
            </div>

            <span className="badge bg-success">In Stock</span>

            <p className="mt-3">Apple 2023 MacBook Pro (14-inch, Apple M3 Pro chip with 11-core CPU and 14-core GPU, 18GB Unified Memory, 512GB) - Space Black</p>

            <div className="d-flex align-items-center">
              <QuantityBox></QuantityBox>
              <Button className="btn-blue btn-lg btn-big btn-round">Add to Cart</Button>
            </div>
            <div className="d-flex align-items-center actions">
              
              <Button className="btn-round btn-sml mt-3" variant="outlined">
              <FaRegHeart className="mr-2"/>Add to Wishlist</Button>

              <Button className="btn-round btn-sml mt-3 ml-3" variant="outlined">
              <MdOutlineCompareArrows  className="mr-2"/>COMPARE</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
