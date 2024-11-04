import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Background from './components/Background/Background'
import FeaturedRooms from './components/FeaturedRooms/FeaturedRooms'
import Amenities from './components/Amenities/Amenities'
import NewsEvents from './components/NewsEvents/NewsEvents'
import ForRequest from './components/ForRequest/ForRequest'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeaturedRooms/>
      <Amenities/>
      <NewsEvents/>
      <ForRequest/>
      <Footer/>
    </>
  )
}

export default App
