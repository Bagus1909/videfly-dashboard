import React from "react"
import Header from "../components/Header/Header"

const Beranda = () => {
  const HERO_ITEMS = [
    {
      name: "URL to Video",
      logo: "📹",
    },
    {
      name: "Text to Video",
      logo: "📝",
    },
    {
      name: "Speech to Video",
      logo: "🗣️",
    },
    {
      name: "AI Avatar",
      logo: "👤",
    },
  ]
  return (
    <div className='bg-gray-200 m-2'>
      <div className=''>
        <section className='relative flex justify-between items-center'>
          <div className='relative w-full bg-gradient-to-r from-purple-500 to-blue-500 h-48 rounded-lg flex justify-center items-center after:absolute after:w-12 after:h-12 after:bg-transparent after:right-[100px] after:top-0 after:rounded-tr-xl after:shadow-[10px_-10px_#ffffff] before:absolute before:w-12 before:h-12 before:bg-transparent before:right-0 before:top-14 before:rounded-tr-xl before:shadow-[10px_-10px_#ffffff]'>
            <h1 className='text-3xl text-white font-semibold'>Mulai Kreasi Baru Hari Ini</h1>
            <div className=' bg-[#3f2181] text-sm text-white absolute -bottom-4 flex gap-4 rounded-lg shadow-lg md:w-10/12 sm:w-8/12 justify-center'>
              {HERO_ITEMS.map((item, index) => (
                <button key={index} className='px-3 py-2 hover:bg-[#5e4595] hover:rounded-lg'>
                  <span>{item.logo}</span>
                  <p className='hidden md:inline-block'>{item.name}</p>
                </button>
              ))}
            </div>
          </div>
          <div className='flex gap-2 bg-white absolute top-0 right-0 border-b-8 border-l-8 border-white border-t-8 rounded-bl-xl w-[100px]'>
            <img src='https://via.placeholder.com/40' alt='User Avatar' className='rounded-full w-10 h-10' />
            <img src='https://via.placeholder.com/40' alt='User Avatar' className='rounded-full w-10 h-10' />
          </div>
        </section>

        <div className='px-3 py-3'>
          <section className='mt-4'>
            <h3 className='font-bold text-lg mb-4'>Kelola Konten</h3>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-gray-100 p-4 rounded-md'>
                <p>Alchemist Fragrance</p>
                <span className='text-sm text-red-500'>Video | Penting</span>
              </div>
              <div className='bg-gray-100 p-4 rounded-md'>
                <p>Beauty of Angel - Lip Scrub</p>
                <span className='text-sm text-yellow-500'>Video | Tinggi</span>
              </div>
            </div>
          </section>
          <section className='mt-8'>
            <h3 className='font-bold text-lg mb-4'>Proyek</h3>
            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-white shadow-md rounded-md overflow-hidden'>
                <img
                  src='https://via.placeholder.com/150'
                  alt='Project Thumbnail'
                  className='w-full h-32 object-cover'
                />
                <div className='p-4'>
                  <p>Alchemist Fragrance</p>
                  <span className='text-sm text-green-500'>Diterbitkan</span>
                </div>
              </div>
              <div className='bg-white shadow-md rounded-md overflow-hidden'>
                <img
                  src='https://via.placeholder.com/150'
                  alt='Project Thumbnail'
                  className='w-full h-32 object-cover'
                />
                <div className='p-4'>
                  <p>Product A Skincare</p>
                  <span className='text-sm text-gray-500'>Draft</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Beranda
