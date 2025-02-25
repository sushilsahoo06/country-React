import './index.css'
import Navbar from './components/Navbar'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      </div> 
    </div>

  )
}

export default App