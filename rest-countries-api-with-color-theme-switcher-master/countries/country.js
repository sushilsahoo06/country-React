const countryName= new URLSearchParams(window.location.search).get('name')
const countryContainer=document.querySelector(".country-daitels")
fetch("https://restcountries.com/v3.1/all")
  .then((req)=>req.json())
  .then((data)=>{
    console.log(data);
    // data.forEach(element => {
    //   const img=document.createElement('img');
    //   img.classList.add("country-daitels-img");
    //   img.src=element.flags.svg;
    //   countryContainer.append(img)
    // });

  })