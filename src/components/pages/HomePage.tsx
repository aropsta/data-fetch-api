import "../../styles/home.scss"
import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";
import { captureRejectionSymbol } from "events";

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

const links = [
  {
    name: "PRODUCT",
    href: "/product-description"
  },

  {
    name: "User",
    href: "/user-description"

  },
  {
    name: "To do",
    href: "/todo-description"

  }
]

export default function Home(){


return (<main className="main-home">
  <h1>Go to Random: </h1>

  <section className="home-section">

      {
        links.map(
          link=>{
            return(
            <a href={link.href} className="links">
            {link.name}
            </a>
            )
          }
        )
      }
  </section>
</main>)
}
