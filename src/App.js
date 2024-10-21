import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import ProductListing from './Pages/Listing';
import ProductDetails from './Pages/ProductDetails';

export const MyContext = createContext();

function App() {

  const [countryList, setcountryList] = useState([]);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries", []);
  })

  const getCountry=async(url)=>{
    const responsive =  await axios.get(url).then((res)=>{
      setcountryList(res.data.data);
    })
  }
  const values={
    countryList
  }
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header></Header>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}></Route>
          <Route path="/listing/:id" exact={true} element={<ProductListing/>}></Route>
          <Route path="/product/:id" exact={true} element={<ProductDetails/>}></Route>
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

