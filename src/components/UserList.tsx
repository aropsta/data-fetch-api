
import Item from "./UserItem";
import "../styles/productPage.scss"
import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";
import {UserItem} from "../interaces/User";


export default function ProductGallary() {

  //const [dataType, setDataType]= useState("products")

  //JSON Item and setter function
  const [items, setItems] = useState<UserItem[]>([]);
  
  //
  const [error, setError] = useState([]);

  //boolean for if data has been received
  const [loading, setLoading] = useState(true);

  const JSON_URL= "https://dummyjson.com";



  //function to fetch our data
  const fetchData = async (dataType:string) => {

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
      setItems(data["users"])
      setLoading(false)

      } else {console.log( response + "Query failed!")}

    } catch(e:any){
      setError(e);
      console.log(error)

    }
  }

//On first render call fetch our data
useEffect(()=>{
  fetchData("users");
}, []);
 

//Checking if data has loaded yet. Then render items or a load screen conditionally 
if(loading){
  return <main className="main-loading" ><p className='loading'>LOADING</p></main>}

    return(
      <ul className="item-gallary">
      {
        items.map(
          item=>{
            return(
            <li key={item.id} className="user-section-item ">
              <Item {...item}>
              </Item>
            </li>
            )
          }
        )
      }
      </ul>
    )
}
    