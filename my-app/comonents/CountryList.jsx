import { ShimmerEffect } from "./ShimmerEffect";
import "../style/style.css"
import Card from "./Card";
import { useEffect, useState } from "react";



export default function CountryList({query}) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading ,setLoading]=useState(true)
 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setLoading(false)
      })
      .catch((err) =>{ 
        setError(err.message)
          setLoading(false)
        });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filterCountries=countries.filter((country)=>
    country.name.common.toLowerCase().includes(query)
  );
  return (
    <>
      
      {loading ? (
        <ShimmerEffect />
        ):(<div className="countries-container">
        {filterCountries.length >0?(
          filterCountries.map((country)=>(
            <Card
            key={country.cca3}
            flags={country.flags.svg}
            name={country.name.common}
            population={country.population.toLocaleString("en-IN")}
            region={country.region}
            capital={country.capital}
            data={country}
        />
        ))
      ):(
        <p>No matching countries found</p>
      )}
      
      </div>)}
    </>
    
  );
}

