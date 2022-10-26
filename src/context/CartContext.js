import React, { useState } from "react";

export const CartContext = React.createContext();

export const CustomProvider=({childrem})=>{
    const[productosCarrito,setproductosCarrito]=useState([])

    const agregarProducto=(nuevoProducto)=>{
        const nuevoProductos=[...productosCarrito]
        nuevoProducto.push(nuevoProducto)
        setproductosCarrito(nuevoProductos)
    }
    return(
        <CartContext.Provider value={{nombre:'pes',productosCarrito:productosCarrito,agregarProducto}}>
            {childrem}
        </CartContext.Provider>
    )
}