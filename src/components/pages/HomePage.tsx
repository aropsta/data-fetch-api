import "../../styles/home.scss"
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

const links = [
  {
    title: "Products",
    url: "/products",
    cName: "nav-links",
  },
  {
    title: "Users",
    url: "/users",
    cName: "nav-links",
  },
  {
    title: "To Dos",
    url: "/to-dos",
    cName: "nav-links",
  },
]


export default function Home(){

return (<main className="main-home">
  <h1>Select your data: </h1>

  <section className="home-section">

      {
        links.map(
          (link, index)=>{
            return(
            <Link key={index} to={link.url} className="links">
            {link.title}
            </Link>
            )
          }
        )
      }
  </section>
</main>)
}
