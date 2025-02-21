const countryName = new URLSearchParams(window.location.search).get('name');
const flagImg = document.querySelector(".country-daitels-img");
const countryNameH1 = document.querySelector('h1');
const detailsText = document.querySelector(".detail-text");

fetch("https://restcountries.com/v3.1/all")
  .then((req) => req.json())
  .then((data) => {
    const country = data.find(c => c.name.common === countryName);
    
    if (country) {
      flagImg.src = country.flags.svg;
      countryNameH1.innerText = country.name.common;

      detailsText.innerHTML = `
        <p><b>Native Name:</b> ${Object.values(country.name.nativeName)[0].common}</p>
        <p><b>Population:</b> ${country.population.toLocaleString("en-IN")}</p>
        <p><b>Region:</b> ${country.region}</p>
        <p><b>Sub Region:</b> ${country.subregion}</p>
        <p><b>Capital:</b> ${country.capital?.join(", ") || "N/A"}</p>
        <p><b>Time Zone:</b> ${country.timezones.join(", ")}</p>
        <p><b>Currencies:</b> ${Object.values(country.currencies)[0].name}</p>
        <p><b>Language:</b> ${Object.values(country.languages).join(", ")}</p>
      `;
    } else {
      console.log("Country not found");
    }

    if(country){
      country.forEach((boader) => {
        // fetch(`https://restcountries.com/v3.1/alpha/${boader}`).then((req)=>req.json())
        // .then(([boadersCountry])=>{
        //   console.log(boadersCountry)
        // })
        console.log(boader)
      });
    }
  })
  .catch((e) => console.log(e));
