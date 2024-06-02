import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import "../styles/useritem.scss"
import {UserItem} from '../interaces/User';

export default function Item(props:UserItem) {

  return (

  <Link to={"description/" + props.id} className='user-item' tabIndex={props.id}> 
  
<svg width="100" height="100" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="53" cy="53" r="53" fill="#949494"/>
</svg>

    <p> {props.firstName + " "+ props.lastName}</p>
  </Link>
  )
}
