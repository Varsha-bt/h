import React from "react";
import "./styles.css";
import Card from "./cards";
import Contact from "./contacts";
 function App() {
  return (
    <div>
      <h1 className="heading">My CONTACTS</h1>
      <Card 
        names={Contact[0].name}
        img={Contact[0].image}
        phno={Contact[0].tel}
        email={Contact[0].mail}
      />
      <Card 
        names={Contact[1].name}
        img={Contact[1].image}
        phno={Contact[1].tel}
        email={Contact[1].mail}
      />
      <Card 
        names={Contact[2].name}
        img={Contact[2].image}
        phno={Contact[2].tel}
        email={Contact[2].mail}
      />
    </div>
  );
}
export default App;