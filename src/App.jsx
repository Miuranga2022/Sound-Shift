import { Route, Routes } from "react-router"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Browse from "./Pages/Browse"
import Playlist from "./Pages/Playlist"
import { Toaster } from "react-hot-toast"
import Plan from "./Pages/Plan"
import Footer from "./Components/Footer"
import Copyright from "./Components/Copyright"

function App() {
  return (
    <div className="relative max-w-[1440px] mx-auto h-full">
      <Toaster position="top-center" gutter={8} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/playlist" element={<Playlist/>} />
        <Route path="/plan" element={<Plan/>} />
      </Routes>
      <Footer />
      <Copyright/>
    </div>
  )
}

export default App
