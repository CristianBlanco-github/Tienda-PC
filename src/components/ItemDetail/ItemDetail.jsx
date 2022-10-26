import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState,useContext } from 'react'
import { CartContext } from '../../context/CartContext'
export const ItemDetail=({item})=>{
    const [contador,setContador]=useState(0)
    const {agregarProducto}=useContext(CartContext)
    const addProduct=(variable1)=>{
        // console.log('contador',variable1)
        setContador(variable1)
        agregarProducto({title:'sexo',price:200, cantidad:variable1})
    }
    return(
        <div className='detail-container'>
            {/* <p style={{width:"100%"}}>Item Detail</p> */}
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className='letras'>
                <h4>{item.title}</h4>
                <h5>${item.price}</h5>
                
            </div>
            <p>cosas{contador}</p>
            <ItemCount stock={10} inicial={1} onAdd={addProduct}/>
        </div>
    )
}