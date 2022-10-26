import './App.css';
import React from 'react';
import{NavBar}from"./components/NavBar/NavBar"
import{ItemListContainer}from"./components/ItemListContainer/ItemListContainer"
import{BrowserRouter, Routes, Route} from"react-router-dom"
import{ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import { CustomProvider } from './context/CartContext';
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
        </Routes>
        </div>
    </div>
    </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
