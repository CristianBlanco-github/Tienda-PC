import { useEffect,useState } from "react";
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemDetail} from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer=()=>{
    const {id}=useParams();
    const[itemProduct, setItemProduct]=useState({});
    
    const promesa =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(arregloProductos);
        },2000);
    })

    useEffect(()=>{
        const getProducto = async()=>{
            const productos=await promesa;
            // console.log('productos',productos);
            const producto =productos.find(elemento=>elemento.id === parseInt(id))
            setItemProduct(producto)
            // setItem(producto) 
        }
        getProducto()
    },[id])
    return(
        <div className="Item-List-Container">
            <p sytle={{with:"100%",color:"white"}}>Item list container</p>
            <ItemDetail item={itemProduct}/>
        </div>
    )
}