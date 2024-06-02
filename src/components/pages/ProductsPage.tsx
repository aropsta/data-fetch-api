
import "../../styles/productPage.scss"
import { Outlet } from "react-router";


export default function ProductPage() {
  return(
   <main> 
      <h1>Products home Page</h1>
      <Outlet></Outlet>
      </main>
  )
  }