import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import AdminLayout from "./layouts/AdminLayout"

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<AdminLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
