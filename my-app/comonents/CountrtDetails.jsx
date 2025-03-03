import { useEffect, useState } from "react"
import "../style/style.css";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";

export const CountrtDetails = () => {
  const countryName = new URLSearchParams(window.location.search).get('name');
  const[countries,setCountries]=useState(null);
  const [error ,setError]=useState(null);
  const [loading, setLoading] = useState(true);

  const {state}=useLocation()
  // const params=useParams()
  // console.log(params)
  // const CountryName=params.country
  
 
  useEffect(()=>{
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res)=>{
      if(!res.ok){
        console.log("failed to fetch !")
      }
      return res.json()
    })
    .then((data)=>{
      updateCountryData()
      
      const foundCountry=data.find((c)=>c.name.common === countryName);
      if(!foundCountry){
        throw new Error("Country not found")
      }
      
    })
    .catch((error)=>{
      setError(error.message)
      setLoading(false)
    })

  },[countryName,state])

  function updateCountryData(foundCountry){

    setCountries({
      key:foundCountry.name.common,
      NativeName:Object.values(foundCountry.name.nativeName)[0].common,
      population:foundCountry.population.toLocaleString("en-IN"),
      Region:foundCountry.subregion,
      Capital:foundCountry.capital,
      TimeZone: foundCountry.timezones?.join(", ") || "N/A",
      Currencies: Object.values(foundCountry.currencies || {})[0]?.name || "N/A",
      Language: Object.values(foundCountry.languages || {}).join(", ") || "N/A",
      image:foundCountry.flags.svg

    });
    setLoading(false)
  }
  if(loading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Error:{error}</p>
  }
  return (
    <main>
      <button className="back-button" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
      </button>
      <div className="country-details">
        <img src={countries.image} alt={countries.key} className="country-details-img" />
        <div className="detail-text-container">
          <h1>{countries.key}</h1>
          <div className="detail-text">
            <p><b>Native Name:</b> {countries.NativeName}</p>
            <p><b>Population:</b> {countries.population}</p>
            <p><b>Region:</b> {countries.Region}</p>
            <p><b>Capital:</b>{countries.Capital}</p>
            <p><b>Time Zone:</b>{countries.TimeZone}</p>
            <p><b>Currencies:</b>{countries.Currencies}</p>
            <p><b>Language:</b> {countries.Language}</p>
          </div>
          <div className="border-country">
            <p><b>Border Countries:</b> None (Island Nation)</p>
          </div>
        </div>
      </div>
    </main>
      
  )
}
