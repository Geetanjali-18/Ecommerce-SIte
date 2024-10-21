import React from "react";

export default function HomeCatItem(props) {
  return (
    <div>
      <div className="homeCatItem text-center w-100"  style={{background: props.homeCatItembg}}>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4b1762fb-d109-401a-ba15-df80e556cf2f.jpg?ts=1710576420"></img>
        <h6>Fruits</h6>
      </div>
    </div>
  );
}
