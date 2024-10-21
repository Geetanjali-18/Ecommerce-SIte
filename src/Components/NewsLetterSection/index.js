import React from 'react'
import NewsLetterSectionImg from '../../assets/50off.png'
import { IoIosMail } from "react-icons/io";
import Button from "@mui/material/Button";


export default function NewsLetterSection() {
  return (
    <div className='newsLetterSection mt-3 mb-3 d-flex'>
      <div className=' container w-100 h-100'>
        <div className='row w-100 h-100'>
            <div className='newsLetterSectionFirstCol col-md-6 h-100'>
                 <p className='text-white'>
                    20% discount on your first order
                 </p>
                 <h3 className='text-white'>Join our newsletter and and get...</h3>
                 <p className='text-light'>Join our email subscription now to get updates on promotions and coupons</p>
                 <form>
                    <IoIosMail />
                    <input placeholder='Enter email address...' type='text'></input>
                    <Button>Subscribe</Button>
                 </form>
            </div>
            <div className='newsLetterSectionSecondCol col-md-6 h-100'>
                <img></img>
            </div>
        </div>
      </div>
    </div>
  )
}
