import React, { useState } from 'react'
import data from "../data.json"
const Home = (props) => {

  const countries = ["Africa", "America", "Asia", "Europe", "Oceania"]  
  const [value, setValue] = useState("")

  function getValue(e){
    setValue(e.target.value)
  }

  function filterCountries(){
    if (value === "Africa"){
        return data.filter((item) => item.region === "Africa")
    }else if (value === "Asia"){
        return data.filter((item) => item.region === "Asia")
    }else if (value === "America"){
        return data.filter((item) => item.region === "Americas")
    }else if(value === "Europe"){
        return data.filter((item) => item.region === "Europe")
    }else if(value === "Oceania"){
        return data.filter((item) => item.region === "Oceania")
    }
  }

  function searchCountries(){
    return data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
  }

  return (
    <div className='px-14 py-12'>
        <div className='flex justify-between mb-8 sm:flex-col sm:items-center'>
            <div className='flex p-4 bg-white w-4/12 rounded-md sm:w-4/6 sm:mb-5 md:w-6/12' style={props.clicked ? {backgroundColor:"#2b3743", color:"white"} : {backgroundColor:"#ffff"}}>
                <img src="./assets/search.svg" alt="" className='w-4 mr-6'/>
                <input type="text" placeholder='Search for a country...' className='border-none outline-none' style={props.clicked ? {backgroundColor:"#2b3743", color:"white"} : {backgroundColor:"#ffff"}} onChange={getValue}/>
            </div>
            <select onChange={getValue} name="" id="" className='w-1/6 rounded-md outline-none z-1 sm:w-72' placeholder='Filter by Region' style={props.clicked ? {backgroundColor:"#2b3743", color:"white"} : {backgroundColor:"#ffff"}}>
                <option value="" disabled selected hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        <div className='grid grid-cols-4 gap-y-16 gap-x-24 lg:grid-cols-3 xl:gap-x-14 lg:gap-x-24 md:gap-x-36 md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center'>
            {value === "" ? data.map((item, index) => (
            <a className='flex flex-col rounded-lg w-60 cursor-pointer' id={item.name} 
            style={props.clicked ? {backgroundColor:"#2b3743", color:"white"} : {backgroundColor:"#ffff"}}
            onClick={props.getCountry}
            href={props.link}
            >
                <img src={item.flag} alt="" className='w-full h-3/4 object-cover rounded-t-lg'/>
                <span className='font-bold pl-5 pb-5 pt-5'>{item.name}</span>
                <span className='pl-5 pb-2'>Population: <span className='opacity-80'>{item.population}</span></span>
                <span className='pl-5 pb-2'>Region: <span className='opacity-90'>{item.region}</span></span>
                <span className='pl-5 pb-2'>Capital: <span className='opacity-90'>{item.capital}</span></span>
            </a>
            )): countries.includes(value) ? filterCountries().map((item) => (
                <a className='flex flex-col rounded-lg w-60 cursor-pointer' id={item.name}
            style={props.clicked ? {backgroundColor:"#2b3743", color:"white"} : {backgroundColor:"#ffff"}}
            onClick={props.getCountry}
            href={props.link}
            >
                <img src={item.flag} alt="" className='w-full h-3/4 object-cover rounded-t-lg'/>
                <span className='font-bold pl-5 pb-5 pt-5'>{item.name}</span>
                <span className='pl-5 pb-2'>Population: <span className='opacity-80'>{item.population}</span></span>
                <span className='pl-5 pb-2'>Region: <span className='opacity-90'>{item.region}</span></span>
                <span className='pl-5 pb-2'>Capital: <span className='opacity-90'>{item.capital}</span></span>
            </a>
            )): searchCountries().map((item) => (
                <a className='flex flex-col rounded-lg w-60 cursor-pointer' id={item.name}
                style={props.clicked ? {backgroundColor:"#2b3743", color:"white"} : {backgroundColor:"#ffff"}}
                onClick={props.getCountry}
                href={props.link}
                >
                    <img src={item.flag} alt="" className='w-full h-3/4 object-cover rounded-t-lg'/>
                    <span className='font-bold pl-5 pb-5 pt-5'>{item.name}</span>
                    <span className='pl-5 pb-2'>Population: <span className='opacity-80'>{item.population}</span></span>
                    <span className='pl-5 pb-2'>Region: <span className='opacity-90'>{item.region}</span></span>
                    <span className='pl-5 pb-2'>Capital: <span className='opacity-90'>{item.capital}</span></span>
                </a> 
            ))}
            
        </div>
    </div>
  )
}

export default Home
