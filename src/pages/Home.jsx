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
      <div><Products/></div>
      {/* <div className="flex-col w-full ">  
        <div>
      <Sorting setSort={setSort}/>
      </div><div className="flex ">
        <Category  setCategoryToDisplay={setCategoryToDisplay} categoryToDisplay={categoryToDisplay} />
        <Products categoryToDisplay={categoryToDisplay} sort={sort} />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
