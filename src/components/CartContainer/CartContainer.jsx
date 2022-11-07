import { useContext } from "react"
import carritologo from'../../assets/productos.png'
import { CartContext } from "../../context/CartContext"
import {tf} from '../../utils/firebase'
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom";
import './CartContainer.css'

export const CartContainer=()=>{
    // const value=useContext(CartContext)
    const {productosCarrito,getTotalPrecio,getTotalCantidad,removeItem,removeCarrito}=useContext(CartContext)
    const [CompraId,setCompraId]=useState('')
    const sendOrder=(evt)=>{
        evt.preventDefault()
        const compra= {
            buyer:{ 
                name:evt.target[0].value, 
                phone:evt.target[1].value, 
                email:evt.target[2].value 
            }, 
            items: productosCarrito,
            date:4/11/22,
            total: getTotalPrecio()   
        }
        // crear la referncia pra enviar a la base de datos
        const queryRef=collection(tf,'orders')
        //agregar la informacion
        addDoc(queryRef,compra).then((resultado)=>{
        setCompraId(resultado.id)
    })
    
    }
    if (productosCarrito.length === 0) {
        return (
        <div className='center'>
            <img src={carritologo} alt="logocarrito" />
            <Link to='/'>
            <button className='btn btn-secondary'>
                <small>Ver productos</small>
            </button>
            </Link>
        </div>
        );
    }
    return(
        <div className="carrito">
            <div>
                <p>CARRITO</p>
                
                {
                    productosCarrito.map((producto)=>(
                        <div className="portada">
                            <div>
                                <img src={producto.pictureUrl} width="100px" height="100px"alt="" />
                                <p>{producto.title}</p>
                            </div>
                            <div>
                                <p>Precio Unitario:{producto.price}$</p>
                                <p>total cantidad:{producto.cantidadPrice}$</p>
                                <p>Cantidad:{producto.cantidad}#</p>
                            </div>
                            <button className="botns" onClick={()=>removeItem(producto.id)}>Eliminar</button>
                        </div>
                    ))
                }
                <p><strong>Cantidad de productos Total:</strong>{getTotalCantidad()}</p>
                <p><strong>Precio Total:</strong>{getTotalPrecio()}</p>
                <button className="vaciartodo" onClick={()=>removeCarrito()}>	&#128465;&#65039; Vaciar Carrito</button>
                <Link to='/checkout'>
                    <button className='btn btn-secondary'><small>Checkout</small>
                    </button>
                </Link>
            </div>
            <button className='botoninicios'><Link to={`/`} className='botoninicios'>Volver a Inicio</Link></button>
        </div>
    )
}