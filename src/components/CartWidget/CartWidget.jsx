import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
export const CartWidget=()=>{
    const {getTotalCantidad}=useContext(CartContext)
    return(
            <div className='carritologo'>
                <FontAwesomeIcon  icon={faCartShopping}/>
                <span>{getTotalCantidad()}</span>
            </div>
    )
}
