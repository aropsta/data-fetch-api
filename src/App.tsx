import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";
import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from './components/pages/Home';
import ProductPage from './components/pages/ProductPage';
import ProductItem from "./interaces/Product";
interface Aprops{

}

function App() {


  //define the kind of JSON data we will be fetching. Default value of products
  const [dataType, setDataType]= useState("products")

  //initilize array of JSON items
  const [items, setItems] = useState<ProductItem[]>([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const JSON_URL= "https://dummyjson.com";


 //const fetchData = () =>{

    //fetch(`${JSON_URL}/${dataType}`).then(response =>response.json()).then(jsonArr=> setItems(jsonArr.slice(0,10))).catch(err => setError(err)) ;
    //console.log( `${JSON_URL}/${dataType}`);

 //}

//passing function by reference. only called once. Arrow function will have same behaviour
  const fetchData = async () => {
    setLoading(true);

    try{
      
    const response = await fetch(`${JSON_URL}/${dataType}`);
    const data= await response.json() as ProductItem[];
    setItems(data);
    console.log("data: " + data)
    } catch (e:any){
      setError(e)
    }


    setLoading(false);
  }
useEffect(()=>{
 fetchData(); 
}, []);

 


  return (
    <>
<Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-page" element={<ProductPage/>} />
    </Routes>
</>

  );
}

export default App;
