import React, { useContext, useEffect } from 'react'
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";
import Slide from '@mui/material/Slide';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Draggable from 'react-draggable';
import Paper, { PaperProps } from '@mui/material/Paper';

import { MyContext } from '../../App'
import Dialog from "@mui/material/Dialog";
import { useState } from "react";


const Transition = React.forwardRef(function Transition(
  props, ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
const CountryDropDown = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpenLocationModel, setisOpenLocationModel] = useState(false);
  const [selectedCountry, setselectedCountry] = useState(null);

  const [selectedCountry2, setselectedCountry2] = useState(null);


  const selectedCountryIndex=(index, name)=>{
    setselectedCountry(index);
    setselectedCountry2(name);
    setisOpenLocationModel(false);
  }
  const context = useContext(MyContext);


  const [countryList, setcountryList] = useState([]);
  useEffect(()=>{
    setcountryList(context.countryList);
  }, [])
  const filterList=(e)=>{
    const keyword = e.target.value.toLowerCase();

    if(keyword==""){
      setcountryList(context.countryList)
    }
    else{
      const filteredList = countryList.filter((item)=>{
        return item.country.toLowerCase().includes(keyword);
      })
      setcountryList(filteredList);
    }
  
  }
  return (
    <>
      <Button className="countryDrop" onClick={()=>setisOpenLocationModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{selectedCountry2}</span>
        </div>
        <span className="downArrow">
          {" "}
          <FaAngleDown style={{color: "black"}} />{" "}
        </span>
      </Button>

      <Dialog open={isOpenLocationModel} className="locationModel" onClose={()=>setisOpenLocationModel(false)}  TransitionComponent={Transition} fullScreen={fullScreen} aria-labelledby="draggable-dialog-title" PaperComponent={PaperComponent}>
        <h5> Chose your Delivery Location </h5>
        <p>Enter your address Enter your address</p>
        <Button className="close__" onClick={()=>setisOpenLocationModel(false)}><RxCross2></RxCross2></Button>
        <div className="headerSearch w-100">
        <input type="text" placeholder="Search for area.."  onChange={filterList}/>
        <Button>
          <FaSearch />
        </Button>
      </div>
      <ul className="countryList mt-3">
        {
          countryList?.length!==0 && countryList?.map((item, index)=>{
            return(
              <li key={index}><Button onClick={()=>selectedCountryIndex(index, item.country)} className={`${selectedCountry===index ? 'active' :''}`}>{item.country}
              </Button></li>
            )
          })
        }
      </ul>
      </Dialog>
    </>
  );
};
export default CountryDropDown;
