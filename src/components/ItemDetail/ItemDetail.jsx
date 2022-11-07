import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState,useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";
export const ItemDetail=({item})=>{
    const {addProduct}=useContext(CartContext)
    const [unidades, setUnidades] = useState(0);

    const agregarProducto=(cantidad)=>{
        setUnidades(cantidad)
        addProduct(item,cantidad)
    }
    return(
        <div className='detail-container'>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title} />
            </div>
            <div className='letras'>
                <h4>{item.title}</h4>
                <h5>${item.price}</h5>
                <div className='botoninicio'>
                    {unidades===0 ?(<ItemCount stock={10} inicial={1} onAdd={agregarProducto}/>)
                        :
                        (
                        <button className='botonterminar'><Link to="/cart" className='botonterminar' >Ir al carrito</Link></button>)}
                        <button className='botoninicios'><Link to={`/`} className='botoninicios'>Volver a Inicio</Link></button>
                </div>
            </div>
        </div>
    )
}