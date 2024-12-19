import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import Beranda from "./pages/Beranda"
import KelolaKonten from "./pages/KelolaKonten"

function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Beranda />} />
            <Route path='/kelola-konten' element={<KelolaKonten />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
