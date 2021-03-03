import React from "react";
function Card(props){
  return(
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.names}</h2>
          <img className="circle-image"
           src={props.img}
           alt="none"/>
        </div>
        <div className="bottom">
          <p className="info">{props.phno}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
      
    </div>
    
  );

}
export default Card;
