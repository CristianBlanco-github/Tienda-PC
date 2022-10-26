import { ThemeContext} from "../../../context/ThemeContext"
import { ComponenteA } from "../ComponenteA/ComponenteA.JSX"
import { ComponenteB } from "../ComponenteB/Componenteb"

export const PaginaContexto=()=>{
    return(
        <div>
            <P>pagina contexto</P>
            <ThemeContext.Provider value={{backgroundTheme:'blue'}}>
            <ComponenteA/>
            <ComponenteB/>
            </ThemeContext.Provider>
        </div>
    )
}