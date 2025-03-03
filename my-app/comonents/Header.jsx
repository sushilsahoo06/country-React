import { useEffect, useState } from "react"
import "../style/style.css"
const Header=()=> {
  const [isDark ,setIsDark]=useState(()=>{
    return localStorage.getItem("theme") === "dark"
  });
  useEffect(()=>{
    if(isDark){
      document.body.classList.add("dark")
    }else{
      document.body.classList.remove("dark")
    }
    localStorage.setItem("theme" , isDark ? "dark" : "light");
  },[isDark]);
  return (
    <header className="header">
    <div className="header-content">
      <h2 className="title">Where is the world?</h2>

      <p className="theme-change" onClick={()=>
      setIsDark((prev)=> !prev)
      }><i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} Mood</p>
    </div>
  </header>
  )
}

export default Header;