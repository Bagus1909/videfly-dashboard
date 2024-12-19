const Header = ({ title }) => {
  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-md'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <div className='flex items-center space-x-4'>
        <span>Sisa 5 kredit</span>
        <button className='bg-orange-500 text-white px-4 py-1 rounded-md'>Upgrade Plan</button>
        <img src='https://via.placeholder.com/40' alt='User Avatar' className='rounded-full w-10 h-10' />
      </div>
    </header>
  )
}

export default Header
