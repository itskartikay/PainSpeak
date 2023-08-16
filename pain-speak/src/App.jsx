import React, {useState} from "react";

import Nav from "./components/Nav";
import Diseasedb from "./components/Diseasedb";
import Card from './components/Card';
import DropdownMenu from "./components/DropdownMenu";
import Footer from "./components/Footer";

// function ncard (Diseasedb){
//   return (
//     <Card

//       imgsrc={Diseasedb.imgsource}

//       translations={Diseasedb.translations}
//       engn={Diseasedb.engName}
//       selectedLanguage={selectedLanguage}

//     />
//   )
// }


const App = () => {

  const [selectedLanguage, setSelectedLanguage] = useState('select');

  const handleChangeLanguage = (event) => {
    setSelectedLanguage(event.target.value);
  };


    return (
        <>
            <Nav/>

            
            <DropdownMenu selectedLanguage={selectedLanguage} onChangeLanguage={handleChangeLanguage} />


            <div style={{
              margin: "0% 10%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"                
            }}>
              

              {Diseasedb.map((pain) => (

              <Card

                image={pain.imgsource}
                type={pain.engName}
                translations={pain.translations}
                selectedLanguage={selectedLanguage}
                
            />
            ))}


            </div>

            <Footer/>
        </>
    )
}

export default App;