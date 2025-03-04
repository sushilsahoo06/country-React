import { useState } from "react"
import "../style/style.css"
const Header=()=> {
  const [isDark ,setIsDark]=useState(JSON.parse(localStorage.getItem('isDark')))
  //console.log(JSON.parse(localStorage.getItem('isDark')))
  if(isDark){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }
  return (
    <header className="header">
    <div className={"header-content"}>
      <h2 className="title">Where is the world?</h2>

      <p className="theme-change" onClick={()=>
      {
        setIsDark(!isDark)
        localStorage.setItem('isdarkMode',!isDark)
      }
      }><i className={`fa-regular fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} Mood</p>
    </div>
  </header>
  )
}

export default Header;