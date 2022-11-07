// Inicio del código
import React, { useState } from 'react';
import {tf} from '../../utils/firebase'
import { collection, addDoc,serverTimestamp } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom";
import './Checkout.css'

export const Checkout=()=> {
    const [loading, setLoading] = useState(false);
    const {productosCarrito,getTotalPrecio,removeCarrito,getTotalCantidad}=useContext(CartContext)
    const [CompraId,setCompraId]=useState('')
    const precioTotal=getTotalPrecio()
    const unidadesTotal = getTotalCantidad();

const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    telefono: '',
});

function onChangeForm(evt) {
    setForm({
    ...form,
    [evt.target.name]: evt.target.value,
    });
}

const formFields = [
    { name: 'Nombre', nameField: 'name' },
    { name: 'Apellido', nameField: 'surname' },
    { name: 'Email', nameField: 'email' },
    { name: 'Telefono', nameField: 'telefono' },
];

function onSubmit(evt) {
    setLoading(true);
    const { name, surname, email, telefono } = form;
    evt.preventDefault()
    const compra= {
        buyer:{ 
            name:name,
            surname:surname,
            email:email,
            telefono:telefono
        }, 
        items: productosCarrito,
        date:serverTimestamp(),
        total: getTotalPrecio()   
    }
    // crear la referncia pra enviar a la base de datos
    const queryRef=collection(tf,'orders')
    //agregar la informacion
    addDoc(queryRef,compra)
    .then((resultado)=>{
    setCompraId(resultado.id)
    removeCarrito()})
    .catch((error) => {
    console.log(error);})
    .finally(() => setLoading(false));
}
if (CompraId) {
    return (
    <div className='center'>
        <h5>
        Gracias por tu compra, tu número de seguimiento es:{" "}
        <b>{CompraId}</b>
        </h5>
        <Link to='/'>
        <button className='btn btn-secondary'>
            <small>Volver a Inicio</small>
        </button>
        </Link>
    </div>
    );
}

return (
    <div className='detalle'>
    <>
    <h1>Detalle de su compra</h1>
    <h3>
        Monto Total a Pagar: <b>$ {precioTotal} </b>
    </h3>
    <h5>
        Cantidad de Productos: <b>{unidadesTotal}</b>
    </h5>
        {formFields.map((elm) => (
        <div className='formular'>
            <label style={{ marginRight: 4 }}>{elm.name}</label>
            <input
            type="text"
            name={elm.nameField}
            onChange={(evt) => onChangeForm(evt)}
            />
        </div>
        ))}
    </>
    <button
        type="submit"
        disabled={
        !(form.name !== '' && form.surname !== '' && form.email !== ''&& form.telefono !== '')
        }
        onClick={(evt) => onSubmit(evt)}
    >
        {loading ? "Finalizando Compra..." : "Finalizar Compra"}
    </button>
    </div>
);
}
