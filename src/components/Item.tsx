import React from 'react'
import "../styles/item.scss"
import ProductItem from '../interaces/Product'

export default function Item(props:ProductItem) {
  return (
  <section className='itemSection'>
  <h2 id='title' className='title'> {props.title} </h2>
  <p className='desc'> Description </p>
<figure>
  <img src="bubbles-work.jpeg"
      alt="Vacuum cleaner"/>
  <figcaption>50% off</figcaption>
</figure>

  <p className='price'>$100</p>
  <img className='rating' src="rating" alt="5 stars" />
  <p className='discount'>MSRP: $100</p>
  </section>
  )
}
