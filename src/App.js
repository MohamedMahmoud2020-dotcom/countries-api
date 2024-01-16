import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data.json"
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Country from './pages/Country';
import "./index.css"
const App = () => {
  
  const [clicked, setClicked] = useState(false)
  const [country, setCountry] = useState("")
  useEffect(() => {
    if (country.length){
      localStorage.setItem("newCountry", JSON.stringify(country))
    }
}, [country]);

  function handleClick(){
    setClicked(!clicked);
  }
  function getCountry(e){
    setCountry(e.currentTarget.id);    
  }

  const val = JSON.parse(localStorage.getItem("newCountry"));
  function searchCountry(){
      if (val  === "") {
          return []
      }else{
          let countryFound = data.filter((item) => item.name === val);
          let countryName = countryFound[0].name;
          let countryFlag = countryFound[0].flag;
          let native = countryFound[0].nativeName;
          let population = countryFound[0].population;
          let region = countryFound[0].region;
          let subRegion = countryFound[0].subregion;
          let capital = countryFound[0].capital;
          let topLevel = countryFound[0].topLevelDomain;
          let currences = ""
          if (countryFound[0].currencies){
            currences = countryFound[0].currencies[0].name;
          }
          let languages = countryFound[0].languages;
          let borders = countryFound[0].borders
          return [countryName, countryFlag, native, population, region, subRegion, capital, topLevel, currences, languages, borders];
      }
  }
  return (
    <div className={clicked ? "body-dark" : "body-light"}>
      <Navbar click={handleClick} clicked={clicked}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home clicked={clicked} getCountry={getCountry} link={"/" + country}/>}></Route>
          <Route path="/:id" element={<Country countryName={searchCountry()[0]} flag={searchCountry()[1]} native={searchCountry()[2]} 
          population={searchCountry()[3]} region={searchCountry()[4]} subRegion={searchCountry()[5]} topLevel={searchCountry()[7]} 
          currences={searchCountry()[8]} languages={searchCountry()[9]} borders={searchCountry()[10]} capital={searchCountry()[6]}  link="/" clicked={clicked}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
