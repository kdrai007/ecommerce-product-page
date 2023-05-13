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
      <main style={{ backgroundColor: `${!menu ? "#404040" : ""}` }}>
        <NavBar />
        <CardImage />
        <DetailsSection />
      </main>
    </MyGlobalContext.Provider>
  )
}

export default App
