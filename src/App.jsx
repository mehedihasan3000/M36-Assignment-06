import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Toggle from './components/Toggle/Toggle'
import Footer from './components/Footer/Footer'

const getProducts = async () => {
  const res = await fetch('data.json');
  return res.json();
}

const productsPromise = getProducts();

function App() {
  // console.log(productsPromise)
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts} />
      <Banner/>
      <Toggle productsPromise={productsPromise} carts={carts} setCarts={setCarts} />
      <Footer />
    </>
  )
}

export default App
