import { Route, Routes } from "react-router-dom"
import Home from "./components/Home.jsx"
import Shop from "./components/Shop.jsx"

function App(){
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
  </Routes>
}

export default App