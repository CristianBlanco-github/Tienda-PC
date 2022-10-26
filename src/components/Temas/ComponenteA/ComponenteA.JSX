import { useContext } from "react"
import { ThemeContext } from "../../../context/ThemeContext"
export const ComponenteA=()=>{
    const value= useContext(ThemeContext)
    return(
        <div style={{padding:'10px', margin:'5px', border:'1px solid red'}}>
            <p>ComponenteA</p>
        </div>
    )
}