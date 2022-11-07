import './Ayuda.css'
import Accordion from 'react-bootstrap/Accordion';
function BasicExample() {
  return (
    <div className='ayudas'>
    <Accordion  defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <h3>Preguntas Frecuentes</h3>
        <Accordion.Header>Realizar un pedido</Accordion.Header>
        <Accordion.Body>
        ¿Cómo realizo un pedido?
        <p>Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, elegís la mensajería de tu preferencia y debajo seleccionas la forma de pago. Luego hacés clic en el botón COMPRAR y Se te asignará un número de pedido y se mostrarán los datos del mismo.También enviaremos un mail a tu correo electrónico registrado con los detalles del pedido realizado.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Precio</Accordion.Header>
        <Accordion.Body>
        ¿El precio que figura en la web es el precio final?
        <p>Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default BasicExample;