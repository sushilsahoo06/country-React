import DropDown from "../comonents/DropDown";
import Header from "../comonents/Header";
import SearchBar from "../comonents/SearchBar";

export default function App() {
  return (
    <>
      <Header/>
      <div className="input-group-head">
        <SearchBar/>
        <DropDown/>
      </div>
      
    </>
  )
}
