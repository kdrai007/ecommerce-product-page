// import { useState } from 'react'
import "./App.css";


import './App.css'
import CardImage from "./components/CardImage";
import DetailsSection from "./components/DetailsSection";
import NavBar from "./components/NavBar";

function App() {
  // const [count, setCount] = useState(0)


  return (
    <main>
      <NavBar />
      <CardImage />
      <DetailsSection />
    </main>
  )
}

export default App
