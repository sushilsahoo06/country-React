import { useState } from "react";
import CountryList from "../comonents/CountryList";
import DropDown from "../comonents/DropDown";
import Header from "../comonents/Header";
import SearchBar from "../comonents/SearchBar";


export default function App() {
  const [query ,setQuery]=useState('')
  return (
    <>
      <main>
      <Header/>
      <div className="input-group-head">
        <SearchBar setQuery={setQuery}/>
        <DropDown/>
      </div>
      <CountryList query={query}/>
      </main>
      
    </>
  )
}
