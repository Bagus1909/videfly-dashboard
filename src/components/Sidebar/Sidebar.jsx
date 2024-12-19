import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.png"

const Sidebar = () => {
  return (
    <div className='w-64 h-screen bg-gray-200 shadow-lg p-6 rounded-tr-xl'>
      <img src={Logo} alt='' className='h-12 mb-5' />
      <button className='bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-md mb-5 text-white font-medium text-lg w-full'>
        Buat Video ➕
      </button>
      <nav>
        <ul className='space-y-4 flex flex-col'>
          <Link to={"/"}>🏠 Beranda</Link>
          <Link to={"/kelola-konten"}>📂 Kelola Konten</Link>
          <li className='cursor-pointer'>📁 Proyek</li>
          <li className='cursor-pointer'>🔧 AI Tools</li>
          <li className='cursor-pointer'>👤 Avatar</li>
          <li className='cursor-pointer'>📋 Brand Kit</li>
          <li className='cursor-pointer'>🚮 Trash</li>
        </ul>
      </nav>
      <div className='absolute bottom-6 w-11/12'>
        <button className='text-red-500'>Keluar</button>
      </div>
    </div>
  )
}

export default Sidebar
