import React, { useState } from 'react';
export const ItemCount=()=>{
    const [contador, setContador] = useState(0);
    const incrementarContador = () => {
    setContador(contador + 1);
    };
    const disminuirContador = () => {
        setContador(contador - 1);
        };
    return(
        <div className="">
            <p>contador{contador}</p>
            <button onClick={incrementarContador}>sumar</button>
            <button onClick={disminuirContador}>restar</button>
        </div>
    )
}