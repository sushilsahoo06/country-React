
import '../App.css';
//import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function app() {
  //const productList=useSelector((state)=>state.product);
  
  return (
    <>
      <Header/>
      <Outlet/>
    </>

  );
}


