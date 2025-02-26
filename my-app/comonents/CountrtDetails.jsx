import { useEffect, useState } from "react"
import Country from "../pages/Country";

export const CountrtDetails = () => {
  const[countries,setCountries]=useState([]);
    const [error ,setError]=useState(null);
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>{
      if(!res.ok){
        console.log("failed to fetch !")
      }
      return res.json()
    })
    .then((data)=>{
      setCountries(data)
    })
    .catch((error)=>setError(error.meassage))
  })
  if(error){
    return <p>Error:{error}</p>
  }
  return (
    countries.map((country)=>(
      <Country
        key={country.name.common}
        NativeName={country.name.NativeName[0].common}

      />
    ))
  )
}
