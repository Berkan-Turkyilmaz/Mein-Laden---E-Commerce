import React, { useState } from "react";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import Inspiration from "../components/home/Inspiration";

function Home() {
  const [sort, setSort] = useState("");
  const [categoryToDisplay, setCategoryToDisplay] = useState("");



  return (
    <div className="">
      
      
      <div><Inspiration /></div>
      <div><Category setCategoryToDisplay={setCategoryToDisplay} categoryToDisplay={categoryToDisplay} /></div>
      <div className="mb-12"><Products/></div>
      
    </div>
  );
}

export default Home;
