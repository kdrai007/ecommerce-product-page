import { useState } from 'react'
import "./App.css";



import './App.css'
import CardImage from "./components/CardImage";
import DetailsSection from "./components/DetailsSection";
import NavBar from "./components/NavBar";
import { MyGlobalContext } from "./context/productcontext";

function App() {
  const [copy, setCopy] = useState<string>("hello there");
  const [cartItem, setCartItem] = useState<number>(0);
  const [menu, setMenu] = useState(true);


  return (
    <MyGlobalContext.Provider value={{ copy, setCopy, menu, setMenu, cartItem, setCartItem }} >
      <main className={`${!menu && 'bg-[#404040] z-0'}`}>
        <NavBar />
        <div className='flex flex-col md:mt-[80px]   md:justify-center md:flex-row md:px-[100px] md:h-screen md:gap-10 overflow-hidden'>
          <CardImage />
          <DetailsSection />
        </div>
      </main>
    </MyGlobalContext.Provider>
  )
}

export default App
