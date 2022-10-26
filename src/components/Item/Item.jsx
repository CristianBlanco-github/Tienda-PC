import './Item.css'
import {Link} from "react-router-dom"
export const Item=({item})=>{
    return(
        <div className="tarjeta-producto">
            <img className='imgar' src={item.pictureUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <Link to={`/item/${item.id}`}>
                <button className="boton-ver"><span>sumar al carro</span></button>
            </Link>
        </div> 
    )
}