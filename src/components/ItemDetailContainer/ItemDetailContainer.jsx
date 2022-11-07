import { useEffect,useState } from "react";
import { ItemDetail} from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {tf} from '../../utils/firebase'
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer=()=>{
    const {id}=useParams();
    const[itemProduct, setItemProduct]=useState({});
    useEffect(()=>{
        const getProducto = async()=>{
            //creamos referencia
            const queryRef= doc(tf,'Items',id)
            //hacemos consulta
            const response= await getDoc(queryRef)
            const newdoc={
                ...response.data(),
                id:response.id
            }
            setItemProduct(newdoc) 
        }
        getProducto()
    },[id])
    return(
        <div className="Item-List-Container">
            <ItemDetail item={itemProduct}/>
        </div>
    )
}