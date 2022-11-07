import './App.css';
import React from 'react';
import{NavBar}from"./components/NavBar/NavBar"
import{ItemListContainer}from"./components/ItemListContainer/ItemListContainer"
import{BrowserRouter, Routes, Route} from"react-router-dom"
import{ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import { CustomProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer.jsx';
import BasicExample from './components/Ayuda/Ayuda'
import {Footer} from './components/Footer/Footer'
import { Checkout } from './components/Checkout/Checkout';

function App() {
  return (
    <CustomProvider>
    <BrowserRouter>
    <div className="App">
      <div>
        <NavBar/>
      
        <Routes>
          <Route path='/'element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId'element={<ItemListContainer/>}/>
          <Route path='/item/:id'element={<ItemDetailContainer/>}/>
          <Route path='/cart'element={<CartContainer/>}/>
          <Route path='/checkout'element={<Checkout/>}/>
          <Route path='/Ayuda'element={<BasicExample/>}/>
        </Routes>
        </div>
        <Footer/>
    </div>
    </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
