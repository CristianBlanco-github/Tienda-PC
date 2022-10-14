import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";
import"./ItemListContainer.css"
export const ItemListContainer=({greeting})=>{
    const{categoryId}=useParams();
    const[productos, setProductos]=useState([])
    const promesa =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(arregloProductos);
        },2000);
    })
    useEffect(()=>{
        promesa.then((response)=>{
            if (categoryId){
                //VAMOS A FILTRAR
                const productsFiltered=response.filter(elm=>elm.categoria===categoryId)
                setProductos(productsFiltered);
            }else{
                //VAMOS MOSTRAR CARR
                setProductos(response)
            }
        })
    },[categoryId])
    return(
        <div className="Item-List-Container">
            <p>Item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}