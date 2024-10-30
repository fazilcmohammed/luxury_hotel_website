import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Background from './components/Background/Background'

function App() {
  const [count, setCount] = useState(0)
  let heroData = [
    {id:1, text: 'Luxury Hotel In Asia'},
    {id:2, text: 'Away From Hustle and Bustle of City Life'},
    {id:1, text: 'Enjoy Your Stay'},
  ]

  const [heroCount, setHeroCount] = useState(2)

  return (
    <>
      <Navbar/>
      {/* <Background heroCount={heroCount}/> */}
      <HeroSection/>
      
    </>
  )
}

export default App
