
import React from "react";
import { useState } from "react";
import Item from "../Item";


/*const data :JSON = { };*/

export default function ProductPage() {
      const [active, setActiveSite] = useState(0);
  /*let nextEntry = () => { if (active < data.length - 1) {*/
      /*return setActiveSite((previous) => previous + 1);*/
    /*} else setActiveSite(0);*/
  /*};*/

  /*let prevEntry = () => {*/
    /*if (active > 0) {*/
      /*return setActiveSite((previous) => previous - 1);*/
    /*} else setActiveSite(galleryItems.length - 1);*/
  /*};*/

return(
 <main className="my-work-main">
        <header className="">
          <h1 id="work-showcase">Work showcase gallary </h1>
          <p>
            All sites are fully responsive and compliment with the WCAG 2 specification, guided by
            WebAIM's 2.0 checklist.
          </p>
        </header>

        <h2>Products </h2>
        <section className="image-gallery">
          <button aria-label="Next Entry" onClick={()=>{}} className="next"></button>
          <button aria-label="Previous project" onClick={()=>{}} className="prev"></button>
        </section>

      </main>)
};