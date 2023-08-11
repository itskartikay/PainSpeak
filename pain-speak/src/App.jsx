import React from "react";

import Nav from "./Nav"
import Diseasedb from "./Diseasedb";
import Card from './Card'

function ncard (Diseasedb){
  return (
    <Card

      imgsrc={Diseasedb.imgsource}
      rusn={Diseasedb.rusName}
      engn={Diseasedb.engName}

    />
  )
}


const App = () => {
    return (
        <>
            <Nav/>
            <div style={{
              margin: "0% 10%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"                
              }}>
              {Diseasedb.map(ncard)}
            </div>
        </>
    )
}

export default App;