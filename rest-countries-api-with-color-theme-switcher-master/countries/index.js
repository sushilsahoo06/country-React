const countriesContainer=document.querySelector('.countries-container')
fetch("https://restcountries.com/v3.1/all")
  .then((req)=>req.json())
  .then((data)=>{
    data.forEach((country) => {
      const countryCard=document.createElement('a');
      countryCard.classList.add("country-card");
      countryCard.href = `country.html?name=${encodeURIComponent(country.name.common)}`;
      const cardHTML=`
      <img src=${country.flags.svg} alt="country-img">
        <div class="card-text">
          <h3>${country.name.common}</h3>
          <p><b>Population</b>:${country.population.toLocaleString("en-IN")}</p>
          <p><b>Region</b>:${country.region}</p>
          <p><b>Capital</b>:T${country.capital}</p>
        </div>
    `
    countryCard.innerHTML=cardHTML;
    countriesContainer.append(countryCard)
    });
  })



  // const cardImg=document.createElement('img')
  // cardImg.src="https://mainfacts.com/media/images/coats_of_arms/tw.svg";
  // countryCard.append(cardImg);
  // const cardText=document.createElement('div');
  // cardText.classList.add("cardText")
  // countryCard.append(cardText)



