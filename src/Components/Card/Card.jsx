import React from 'react'
import './card.css'

function Card(props) {

    return (
    <article className='cardProducto'>
        <h2>{props.product.name}</h2>
        <img src={props.product.photo} alt={`Producto ${props.product.name}`} />
        <h3>${props.product.price}</h3>
        <button type='button'>Comprar</button>
    </article>
    )
}

export default Card

// Producto Procesador