
import { UserItem} from '../interaces/User'
import Item from "./ProductItem";
import "../styles/useritem.scss"
import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function UserDetailsPage() {
  

  //parameter passed in from gallary page. To make request for single item
  const index = useParams().id;

  const ITEM_URL = `users/${index}`
  const JSON_URL= "https://dummyjson.com";

  
  const [error, setError] = useState([]);

  //Is still loading?
  const [loading, setLoading] = useState(true);

  //Array of JSON items. Typed from an interface
  const [item, setItem] = useState<UserItem>({}as UserItem);

  const fetchData = async () => {
     setLoading(true)
     try{
const response = await fetch(`${JSON_URL}/${ITEM_URL}`, {
         method: 'GET',
         headers: {
           "Content-Type": "application/json"
         }
       })
       //error handling
       if (response.ok){
       const data = await response.json();
    setItem(data)
    setLoading(false)
       }  else {console.log(response + " Query failed!")}
     }catch(e:any){


      setError(e);
      console.log(error)
     }
       
   }

 useEffect(()=>{
   fetchData();
 }, []);

if(loading){
  return <main className="main-loading" ><p className='loading'>LOADING</p></main>}
    return(
  <>
  <section className='user-details'>
    <section className='user'>
<svg width="100" height="100" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="53" cy="53" r="53" fill="#949494"/>
</svg>

<p>@{item.username}</p>
    </section>
    <section className='personal'>
      <section className='name'>
<h2 id="1">{item.firstName+" " + item.lastName +" , " + item.age }</h2>
<p>{item.company.title + " at " + item.company.name}</p>
<p>{item.email}</p>
      </section>
      <section className='address'>

<p>{item.address.address}</p>
<p>{item.address.city +" "+ item.address.postalCode +" "+ item.address.state}</p>
<p>{item.address.country}</p>
      </section>
    </section>

  </section>
  
  </>      
        )

}
    