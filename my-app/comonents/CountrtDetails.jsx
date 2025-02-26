import { useEffect, useState } from "react"


export const CountrtDetails = () => {
  const countryName = new URLSearchParams(window.location.search).get('name');
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
    .then(([data])=>{
      console.log(data)
      const country = data.find(c => c.name.common === countryName);      
      setCountries({
        key:country.name.common,
        NativeName:Object.values(country.name.nativeName[0].common),
        population:country.population.toLocalString("en-IN"),
        Region:country.subregion,
        Capital:country.capital,
        TimeZone:country.timezones,
        Currencies:Object.values(country.currencies)[0].name,
        Language:Object.values(country.languages),
        image:country.flags.svg

      })
    })
    .catch((error)=>setError(error.meassage))
  },[])
  if(error){
    return <p>Error:{error}</p>
  }
  return (
    <main>
      <button className="back-button" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
      </button>
      <div className="country-details">
        <img src={countries.svg} alt={countries.key} className="country-details-img" />
        <div className="detail-text-container">
          <h1>Iceland</h1>
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
