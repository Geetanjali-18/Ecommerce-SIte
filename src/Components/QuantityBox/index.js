import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Button } from "@mui/material";

export default function QuantityBox() {
    const [inputVal, setinputVal] = useState(1);

    const minus = () =>{
        {inputVal>0 && setinputVal(inputVal-1)}
    }
    const plus = () =>{
        setinputVal(inputVal+1)
    }
  return (
    <div className="quantityDrop d-flex align-items-center">
      <Button onClick={()=>minus()}>
        <FaMinus></FaMinus>
      </Button>
      <input type="text" value={inputVal} />
      <Button onClick={()=>plus()}>
        <FaPlus></FaPlus>
      </Button>
    </div>
  );
}
