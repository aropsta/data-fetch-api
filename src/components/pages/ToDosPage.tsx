import "../../styles/todo.scss"
import { useEffect, useState } from "react";
import ToDoItem from "../../interaces/Todo";
import "../../styles/todo.scss"


export default function Todos(){
//const [dataType, setDataType]= useState("products")

  //JSON Item and setter function
  const [items, setItems] = useState<ToDoItem[]>([] as ToDoItem[]);
  
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
      setItems(data["todos"])
      setLoading(false)

      } else {console.log( response + "Query failed")}

    } catch(e:any){
      setError(e);
      console.log(error)

    }
  }

//On first render call fetch our data
useEffect(()=>{
  fetchData("todos");
}, []);
 

//Checking if data has loaded yet. Then render items or a load screen conditionally 
if(loading){
  return <main tabIndex={1}><p className='loading'>LOADING</p></main>}

    return(
      <main>
      <h1>To dos</h1>
      <ul className="todo-gallary">
      {
        items.map(
          item=>{
            return(
            <li key={item.id} className={`todo-item ${item.completed? "strike" : ""}`}> - {item.todo}

            <br />
            <br />
            </li>
            )
          }
        )
      }
      </ul>
      </main>
    )

}
