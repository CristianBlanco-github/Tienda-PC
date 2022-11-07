import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const  CustomProvider=({children})=>{
    const[productosCarrito,setproductosCarrito]=useState([])
    //Verifico si el producto ya exites si o no
    const isInCart=(id)=>{
        const producExiste= productosCarrito.some((elemento)=>elemento.id===id)
        return producExiste;
    }
    const addProduct=(item, cantidad)=>{
        const productosCarritoCopia=[...productosCarrito]
        //si el producto ya existe, modifico la propiedad
        if(isInCart(item.id)){
            const posProducto= productosCarritoCopia.findIndex((elemento)=>elemento.id===item.id)
            productosCarritoCopia[posProducto].cantidad+=cantidad
            productosCarritoCopia[posProducto].cantidadPrice=productosCarritoCopia
            [posProducto].cantidad*productosCarritoCopia[posProducto].price
            setproductosCarrito(productosCarritoCopia)
        }else{
             //sino agrego el nuevo producto al array
            const newProducto={
                ...item,
                cantidad:cantidad,
                cantidadPrice:cantidad*item.price
            }
            productosCarritoCopia.push(newProducto)
            setproductosCarrito(productosCarritoCopia)
        }
    }
    const getTotalPrecio=()=>{
        const precioTotal=productosCarrito.reduce((acc,curr)=>acc+curr.cantidadPrice,0);
        return precioTotal;
    }
    const getTotalCantidad=()=>{
        const cantidadTotal=productosCarrito.reduce((acc,curr)=>acc+curr.cantidad,0);
        return cantidadTotal;
    }
    const removeItem=(id)=>{
        const newProducto=productosCarrito.filter((elemento)=>elemento.id!==id)
        setproductosCarrito(newProducto)
    }
    const removeCarrito=(length)=>{
        const newProducto=productosCarrito.filter((elemento)=>elemento.length!==length
        )
        setproductosCarrito(newProducto)
    }
    return(
        <CartContext.Provider value={{productosCarrito, addProduct,getTotalPrecio,getTotalCantidad,removeItem,removeCarrito}}>
            {children}
        </CartContext.Provider>
    )
}