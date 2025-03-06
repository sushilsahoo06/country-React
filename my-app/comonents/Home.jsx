import CountryList from "../comonents/CountryList";
import DropDown from "../comonents/DropDown";
import SearchBar from "../comonents/SearchBar";
import { useContext,useState } from "react";
import { Themecontext } from "../context/Themecontext";
import { useWindowSize } from "../Utility";


const Home = () => {
  const a=useContext(Themecontext)
  console.log(a)
  const [query ,setQuery]=useState("")
  const windowSize=useWindowSize()


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