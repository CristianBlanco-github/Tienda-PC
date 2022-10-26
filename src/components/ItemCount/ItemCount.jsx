import './intemCount.css'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
export const ItemCount=({stock, inicial, onAdd})=>{
    const value=useContext(CartContext)
    const [contador, setContador] = useState(inicial);
    const incrementarContador = () => {
        if(contador<stock){
            setContador(contador + 1);
        }
    };
    const disminuirContador = () => {
        if(contador>1){
            setContador(contador - 1);
        }
        };
        console.log('contador',contador)

    return(
        <div className="input">
            <p>Stock Disponible:{stock}</p>
            <div className='contenedor-controles'>
                <button disabled={stock===0} onClick={disminuirContador} className='botonControl'>-</button>               
                <p className='input__number'>{contador}</p>
                <button disabled={stock===0} onClick={incrementarContador} className='botonControl'>+</button>
            </div>
            <button disabled={stock===0}className='botonAgregar' onClick={()=>onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}