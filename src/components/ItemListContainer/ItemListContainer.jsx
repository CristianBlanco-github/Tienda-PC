import { useEffect,useState,useContext } from "react";
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList";
import"./ItemListContainer.css"
import {tf} from '../../utils/firebase'
import { collection, getDocs,query,where } from "firebase/firestore";
export const ItemListContainer=()=>{
    const{categoryId}=useParams();
    const[productos, setProductos]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const queryRef= categoryId ? query(collection(tf,'Items'),where('categoria','==',categoryId)) : collection(tf,'Items')
        getDocs(queryRef).then((response)=>{
            const results=response.docs
            const docs=results.map(doc=>{
                return{
                    ...doc.data(),
                    id:doc.id
                }
            })
            setProductos(docs);
            setLoading(false)
        })
    },[categoryId])
    return(
        <div className="Item-List-Container">
            {
                loading ?
                <p>Cargando...</p>
                :
            <ItemList items={productos}/> 
            }
        </div>
    )
}