import Button from "@mui/material/Button";
import { MdMenu } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {

  const [isOpenSideBar, setisOpenSideBar] = useState(false);
  const isOpenSideBarMenu = ()=>{
    setisOpenSideBar(!isOpenSideBar);
  }
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
            <div className="catWrapper">
            <Button className="allCatTab align-items-center" onClick={isOpenSideBarMenu}>
              <span className="icon1 mr-2">
                <MdMenu></MdMenu>
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                <IoIosArrowDown></IoIosArrowDown>
              </span>
            </Button>

            <div className={`sidebarMenu ${isOpenSideBar===true ? 'open' : ''}`}>
              <ul>
                   <li> <Link to={"/"}><Button>Men</Button></Link></li>
                   <li> <Link to={"/"}><Button>Women</Button></Link></li>
                   <li> <Link to={"/"}><Button>Beauty</Button></Link></li>
                   <li> <Link to={"/"}><Button>Clothing</Button></Link></li>
                   <li> <Link to={"/"}><Button>Footwear</Button></Link></li>
                   <li> <Link to={"/"}><Button>Watches</Button></Link></li>    
              </ul>
                    
            </div>
            </div>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
                <li className="list-inline-item"><Link to="/">Home</Link></li>
                <li className="list-inline-item"><Link to="/">Electronics</Link></li>
                <li className="list-inline-item"><Link to="/">Fashion</Link>
                  <div className="submenu shadow">
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item"><Link to="/">Home & Kitchen</Link>
                <div className="submenu shadow">
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                  </div>
                </li>
                <li className="list-inline-item"><Link to="/">Beverages</Link><div className="submenu shadow">
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                  </div>
                  </li>
                <li className="list-inline-item"><Link to="/">Food</Link><div className="submenu shadow">
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                  </div>
                  </li>
                <li className="list-inline-item"><Link to="/">Contact Us</Link><div className="submenu shadow">
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                    <Link to={"/"}><Button>Fashion</Button></Link>
                  </div>
                  </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
