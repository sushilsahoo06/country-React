import CountryList from "../comonents/CountryList";
import DropDown from "../comonents/DropDown";
import SearchBar from "../comonents/SearchBar";
import { useState } from "react";


const Home = () => {
  const [query ,setQuery]=useState("")

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