import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
export const CartWidget=()=>{
return(
    <div className='carritologo'>
        <FontAwesomeIcon  icon={faCartShopping }/>
        <span>0</span>
    </div>
    
)
}
