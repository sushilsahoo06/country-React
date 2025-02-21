const countryName= new URLSearchParams(window.location.search).get('name')
const flagImg=document.querySelector(".country-daitels-img")
const countryNameH1=document.querySelector('h1')

fetch("https://restcountries.com/v3.1/all")
  .then((req)=>req.json())
  .then((data)=>{
    console.log(data)
    const country=data.find(c=>c.name.common==countryName)
    if(country){
      flagImg.src=country.flags.svg;
      countryNameH1.innerText=country.name.common;

      // const detailsText=document.createElement("div");
      // detailsText.classList.add("detail-text");
      // detailsText.innerHTML=`
      //   <p><b>Native Name:</b> ${country.name.common}</p>
      //   <p><b>Population:</b> ${country.population.toLocaleString("en-IN")}</p>
      //   <p><b>Region:</b> ${country.region}</p>
      //   <p><b>Sub Region:</b> ${country.region}</p>
      //   <p><b>Capital:</b> ${country.capital}</p>
      //   <p><b>Top Level Dominance:</b> ${country.timezones}</p>
      //   <p><b>Currencies:</b> ${country.currencies}</p>
      //   <p><b>Language:</b> ${country.language}</p>
      //   `
    }else{
      console.log("country not found")
    }
    
    // countryContainer.append(detailsText)
  })
  .catch((e)=>console.log(e))