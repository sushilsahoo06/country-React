import CountryList from "../comonents/CountryList";
import DropDown from "../comonents/DropDown";
import SearchBar from "../comonents/SearchBar";
import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../context/Themecontext";


const Home = () => {
  const[windowSize,setwidth]=useState(
    {width:window.innerWidth,
      height:window.innerHeight
    })
  const [query ,setQuery]=useState("")
  const a=useContext(Themecontext)
  console.log(a)
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setwidth({width:window.innerWidth,height:window.innerHeight})
    })
  })

  return (
    <main>
      <div className="input-group-head">
        <SearchBar setQuery={setQuery}/>
        <DropDown/>
      </div>
      <h1 style={{textAlign:'center'}}>{windowSize.width}x {windowSize.height}</h1>
      <CountryList query={query}/>
      </main>
  )
}

export default Home