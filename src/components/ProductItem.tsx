import React from 'react'
import "../styles/productItem.scss"
import { Product, jsonProducts } from '../interaces/Products'

export default function Item(props:Product) {
const viewDetails = () =>{
  
}

  return (
  <section className='item' onClick={viewDetails}>
  <a href='/product-description' id='title' className='title anchor' tabIndex={props.id}> 
  {props.title}
<figure className='figure'>
  <img src="data:,"
      alt={props.title}/>
  <figcaption className="fig-cap" aria-label='discount'>{-Math.round(props.discountPercentage)}% </figcaption>
</figure>
  <p className='rating' aria-label={ Math.round(props.rating) + " stars"}>{"* ".repeat(Math.round(props.rating))} </p>
  <p className='price'>{props.price}</p>
  <p className='discount'>MSRP: {Math.round(props.price/(1-(props.discountPercentage/100)))}</p>
</a>
  </section>
  )
}
