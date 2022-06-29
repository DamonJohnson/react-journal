import { BrowserRouter, Routes, Route } from "react-router-dom"
import CategorySelection from "./CategorySelection"
import Home from "./Home"
import NewEntry from "./NewEntry"
import Nav from "./Nav"



function App() {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/category" element = {<CategorySelection />} />
        <Route path = "/entry/new/:category" element = {<NewEntry />} />
        <Route path = "*" element = {<h4>Page not found</h4>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
