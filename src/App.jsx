import React, { useState } from 'react'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Search from './components/Search'

  
const App = () => {

  
  
  const [searchQuery,setSearchQuery]=useState('')


  return (
    <div className='md:px-4 mx-auto'> 
        <Navbar/>

   
    <div className=" container mx-auto ">  

    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/> 

     
      <Cards searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


       <Footer/> 

       </div>
    </div>
  )
}

export default App