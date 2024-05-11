import { useState } from 'react'
import './App.css'
import { Route,Routes,Link } from 'react-router-dom'
import Card from './assets/Components/Card'
import Favourite from './assets/Components/Favorites'
import Picture from './assets/Components/NatureImg.jpg'
import Image from './assets/lgImg.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      <section>
        <nav>
            <div className="w-[100%] absolute flex justify-between items-center text-white nav   px-16 py-4  max-sm:px-3">
                <Link className='Link text-2xl font-bold max-sm:text-xl borderBottom' to={'/'}>Quote</Link>
                <Link className='Link text-2xl font-bold max-sm:text-xl borderBottom' to={'/favourite'}>Favourites</Link>
            </div>
        </nav>
      </section>
      <div className="">
      <img className='img md:hidden transition' src={Picture} alt="" />
      <img className='img max-sm:hidden max-md:hidden transition' src={Image} alt="" />
      </div>
      

      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
      </Routes>
    </>
  )
}

export default App
