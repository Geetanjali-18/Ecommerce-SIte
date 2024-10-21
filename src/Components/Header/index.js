import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import CountryDropDown from '../CountryDropDown/index.js'
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import HeaderSearch from '../HeaderSearch/index.js';
import Navigation from '../Navigation/index.js';
import { useContext, useState } from 'react';
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { MyContext } from '../../App.js'
 
const Header = () =>{
    const [topStrip, settopStrip] = useState(true);
    const RemoveTopStrip = () =>{
        settopStrip(false);
    }

    const context = useContext(MyContext)
    return(
        <div className="headerWrapper">
            {
                topStrip === true 
                &&
                <div className='top-strip bg-main'>
                <div className="container">
                    <div className="mb-0 mt-0 text-center"> Due to heavy rain..we apologise for late deliveries 🥺</div> 
                </div>
                <ImCross onClick={RemoveTopStrip}/>
                </div>
            }

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo}/></Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>
                            {
                                context.countryList.length!==0 && <CountryDropDown></CountryDropDown>
                            }
                            
                            <HeaderSearch></HeaderSearch>
                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='user mr-3'><FiUser /></Button>
                                <div className='ml-auto carTab d-flex align-items-center'>
                                    <span className='price'>$4.6</span>
                                    <div className='position-relative ml-2'>
                                    <Button className='user'><FiShoppingCart /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>2</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar starts*/}

            <Navigation></Navigation>
            {/* Navbar ends */}
        </div>
    )
}

export default Header;