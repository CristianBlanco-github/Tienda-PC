import"./NavBar.css"
import imagenlogo from"../../assets/pcgamer.PNG";
import{CartWidget}from"../CartWidget/CartWidget"
import { Link,NavLink } from "react-router-dom";
export const NavBar=()=>{
    return(
        <nav className="navegacion">
            <div>
            <Link to="/"><img className="logoinicio" src={imagenlogo} alt="logo" /></Link>
            </div>
            <div className="listado">
                <Link to="/"><li><a href="/">Productos</a></li></Link>
                <Link to="/Ayuda"><li><a href="/">Ayuda</a></li></Link>
                <NavLink className={({isActive})=>isActive===true?'claseActive':'claseInactive'}to="/category/procesadores"><li><a href="/">Procesadores</a></li></NavLink>
                <NavLink className={({isActive})=>isActive===true?'claseActive':'claseInactive'}to="/category/periferiicos"><li><a href="/">Perifericos</a></li></NavLink>
            </div>
            <div>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
            </div>
        </nav>
    )
}