import React from "react"
import Header from "../components/Header/Header"
import CardKelolaKonten from "../components/KelolaKonten/CardKelolaKonten"

const KelolaKonten = () => {
  return (
    <div>
      <Header title='Kelola Konten' />
      <button className=''>Buat Konten </button>
      <CardKelolaKonten />
    </div>
  )
}

export default KelolaKonten
