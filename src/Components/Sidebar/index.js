import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from "react-router-dom";
// import {Link} from 'react-router-dom'
export default function Sidebar() {
  const [value, setvalue] = useState([100, 60000]);
  const [value2, setvalue2] = useState(0);
  return (
    <>
     <div className="sidebar">
    <div className="sticky">

    
     
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>

          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Women" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Kids" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Beauty" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Men" className="w-100"/>
              </li>
              
              
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>FILTER BY PRICE</h6>

          <RangeSlider value={value} onInput={setvalue} min={100} max={60000} step={5}/>

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>From:<strong className="text-success">Rs: {value[0]}</strong></span>
            <span className="ml-auto">From: <strong className="text-success">Rs: {value[1]}</strong></span>
          </div>


        </div>

        <div className="filterBox">
          <h6>PRODUCT STATUS</h6>

          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel control={<Checkbox />} label="In Stock" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="On Sale" className="w-100"/>
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>BRANDS</h6>

          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel control={<Checkbox />} label="Apple" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Dell" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Lenovo" className="w-100"/>
              </li>
              <li>
                <FormControlLabel control={<Checkbox />} label="Asus" className="w-100"/>
              </li>
              
            </ul>
          </div>
        </div>

        <Link to="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfVIyHser_YukAqf5jahHgpgBTnAg72hcoQ&s" className="w-100"></img></Link>
      </div>
      </div>
    </>
  );
}
