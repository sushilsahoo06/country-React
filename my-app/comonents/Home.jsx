import CountryList from "../comonents/CountryList";
import DropDown from "../comonents/DropDown";
import SearchBar from "../comonents/SearchBar";
import { useContext, useState } from "react";
import { Themecontext } from "../context/Themecontext";


const Home = () => {
  const [query ,setQuery]=useState("")
  const a=useContext(Themecontext)
  console.log(a)

  return (
    <main>
      <div className="input-group-head">
        <SearchBar setQuery={setQuery}/>
        <DropDown/>
      </div>
      <CountryList query={query}/>
      </main>
  )
}

export default Home