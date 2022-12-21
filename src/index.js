import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

let ncard=function(val){
  

  return(
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 className="heading_style">List of top 5 netflix series in 2022 </h1>
    

    {Sdata.map(ncard)}
  </>
);
