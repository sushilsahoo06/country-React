import Header from "../comonents/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (   
    <>
      <Header/>
      <Outlet/>    
    </>
  )
}
