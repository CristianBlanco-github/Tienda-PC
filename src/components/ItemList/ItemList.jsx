import {Item}from"../Item/Item"
import "./ItemList.css"
export const ItemList=({items})=>{
    // const{items,otraPropiedad}=props
    return(
        <div className="estilos-listado">
            {/* <div sytle={{with:"100%"}}>item list</div> */}
            {
                items.map(producto=>(
                    
                    <Item key={producto.id} item={producto}/>
                    
                ))
            }
        </div>
    )
}  