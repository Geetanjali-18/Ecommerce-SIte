import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { PiDotsSixBold } from "react-icons/pi";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductItem from '../../Components/ProductItem/index'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function ProductListing() {
  const [productView, setproductView] = useState('four')
  const [anchorEl, setAnchorEl] = useState(null);
  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <section className="productListingPage">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar></Sidebar>

            <div className="contentRight">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLI77bMOhA6Jt3Sfwtw1NwAAQL_KyeXMQzg&s"
                className="w-100"
                style={{ borderRadius: "8px" }}
              ></img>

              <div className="showBy mt-3 mb-5 d-flex align-items-center">
                <div className="d-flex btnWrapper">
                  <Button onClick={()=> setproductView('one')}>
                    <IoMdMenu className={productView==='one' && 'act'} ></IoMdMenu>
                  </Button>
                  <Button onClick={()=> setproductView('two')}>
                    <TbLayoutGridFilled className={productView==='one' && 'act'} ></TbLayoutGridFilled>
                  </Button>
                  <Button onClick={()=> setproductView('three')}>
                    <PiDotsSixBold className={productView==='one' && 'act'} ></PiDotsSixBold>
                  </Button>
                  <Button onClick={()=> setproductView('four')}>
                    <TfiLayoutGrid4Alt className={productView==='one' && 'act'} ></TfiLayoutGrid4Alt>
                  </Button>
                </div>

                <div className="ml-auto showByFilter">
                  <Button
                    id="basic-button"
                    aria-controls={openDropdown ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openDropdown ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Show 9 <MdKeyboardArrowDown></MdKeyboardArrowDown>
                  </Button>
                  <Menu
                    className="w-100 showPerPageDropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>15</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                    <MenuItem onClick={handleClose}>60</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="productListingInner">
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>

                <ProductItem imageAddress = 'https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg' itemView = {productView}></ProductItem>
              </div>

              <div className="d-flex align-items-center justify-content-center mt-3">
              <Pagination count={10} color="primary" size="large"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
