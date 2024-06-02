
import { Product, jsonProducts } from '../../interaces/Products'
import Item from "../ProductItem";
import "../../styles/productPage.scss"
import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";


export default function ProductDescriptionPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const index = 1;
  const ITEM_URL = `products/${index}`
  const JSON_URL= "https://dummyjson.com";

  console.log("this is" + index);


  const fetchData = async () => {

    setLoading(true)
      const response = await fetch(`${JSON_URL}/${ITEM_URL}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      const json = await response.json();
      const data = json;
      if (response.ok){
setItem(data["products"])
setLoading(false)
      } 
  }

useEffect(()=>{
  fetchData();
}, []);

return(


  <section className='item' >
  <h2 id='title' className='title' > a </h2>
<figure>
  <img src="data:,"
      alt='item'/>
  <figcaption aria-label='discount'></figcaption>
</figure>

  <p className='rating' aria-label="hi">{} </p>
  <p className='price'>{}</p>
  <p className='discount'>MSRP: {}</p>
  </section>
)
}
    