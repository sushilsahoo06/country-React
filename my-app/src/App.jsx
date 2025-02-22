import CountryList from "../comonents/CountryList";
import DropDown from "../comonents/DropDown";
import Header from "../comonents/Header";
import SearchBar from "../comonents/SearchBar";

export default function App() {
  return (
    <>
      <main>
      <Header/>
      <div className="input-group-head">
        <SearchBar/>
        <DropDown/>
      </div>
      <CountryList/>
      </main>
      
    </>
  )
}
