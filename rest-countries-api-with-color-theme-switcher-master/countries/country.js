new URLSearchParams(window.location.search).get('name')

fetch("https://restcountries.com/v3.1/all")
  .then((req)=>req.json())
  .then((data)=>{
    console.log(data);
  })