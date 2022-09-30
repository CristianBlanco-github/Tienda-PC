import"./NavBar.css"
import imagenlogo from"../../assets/pcgamer.PNG";
import{CartWidget}from"../CartWidget/CartWidget"
export const NavBar=()=>{
    return(
        <nav className="navegacion">
            <img className="logoinicio" src={imagenlogo} alt="logo" />
            <ul className="listado">              
                <li><a href="/">Productos</a></li>
                <li><a href="/">Ayuda</a></li>
                <li><a href="/">Arma tu pc</a></li>
                <li><a href="/">Marca sponsor</a></li>           
            </ul>
            <CartWidget/>
        </nav>
    )
}