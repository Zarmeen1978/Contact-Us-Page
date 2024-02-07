import React from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import ContactHeader from './component/ContactHeader/ContactHeader'
import ContactForm from './component/ContactForm/ContactForm'


function App() {
  
  return (
    <>
       <Navbar/>
       <main className='main_container'>
       <ContactHeader/>
       <ContactForm/>
       </main>
      
    </>
  )
}

export default App
