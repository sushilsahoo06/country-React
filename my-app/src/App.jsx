import Header from "../comonents/Header";
import { Outlet } from "react-router-dom";
import { Themecontext } from "../context/Themecontext";

export default function App() {
  
  return (   
    <Themecontext.Provider value="sushil">
      <Header/>
      <Outlet/>    
    </Themecontext.Provider>
  )
}
