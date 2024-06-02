
import { Product} from "../../interaces/Products";
import Item from "../ProductItem";
import "../../styles/productPage.scss"
import { useEffect, useState} from "react";
import { Outlet } from "react-router";


export default function ProductPage() {
  return(
   <main> 
      <h1>Products Page</h1>
      <Outlet></Outlet>
      </main>
  )
  }