
import { Product, jsonProducts } from "../../interaces/Products";
import Item from "../ProductItem";
import "../../styles/productPage.scss"
import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";
import { Exception } from "sass";


/*const data :JSON = { };*/

export default function ProductPage() {
  const [dataType, setDataType]= useState("products")

  const [items, setItems] = useState<Product[]>([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  const JSON_URL= "https://dummyjson.com";



  //function to fetch our data
  const fetchData = async () => {

    setLoading(true)
    try{
      const response = await fetch(`${JSON_URL}/${dataType}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      //catching any problems with receiving data
      if (response.ok){

      const data = await response.json()
      setItems(data["products"])
      setLoading(false)

      } else {console.log("Query failed")}

    } catch(e:any){
      setError(e);
      console.log(error)

    }
  }

//calling fetchData on first render
useEffect(()=>{
  fetchData();
}, []);
 

//Checking if data has loaded yet. Conditionally render items or load screen
if(loading){
  return <main tabIndex={1}>LOADING</main>}
  
    return(
      <main>
      <h1>Products</h1>
      <ul className="item-gallary">
      {
        items.map(
          item=>{
            return(
            <li key={item.id} className="section-item ">
              <Item {...item}>
              </Item>
            </li>
            )
          }
        )
      }
      </ul>
      </main>
    )
  }