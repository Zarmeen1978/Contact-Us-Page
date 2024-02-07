import {React, useState} from 'react'
import './contactform.css'
import {MdMessage} from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from '../Button/Button'
function ContactForm() {
  const viaCall =()=>{
    console.log("I am callling you")
  }
  const SubmitData =(event)=>{
    event.preventDefault();
    console.log('name',event.target[0].value)
    console.log('email',event.target[1].value)
    console.log('textarea',event.target[2].value)
  }
  return (
    <>
    <section className='section'>
        <div>
        <div className='top_btn'>
        <Button 
        text="VIA SUPPORT CHAT"
        icon={<MdMessage fontSize={'24px'}/>}/>
        <Button 
        onClick={viaCall}
        text="VIA CALL"
        icon={<FaPhoneAlt  fontSize={'24px'}/>}/>
        </div>
        <Button   isOutline ={true}
        text="VIA EMAIL FORM"
        icon={<HiMail   fontSize={'24px'}/>}/>
        <form action="#" className='container_form' onSubmit={SubmitData}>
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter your name' />
          </div>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Enter your name' />
          </div>
          <div className="form_control">
            <label htmlFor="name">Message</label>
            <textarea name="text" id="" cols="30" rows="10" />
          </div>
       
        <div style={{display:'flex', justifyContent:'end', marginTop:'20px'}}>
        <Button  
        text="SUBMIT HERE"/>
        </div>
        </form>
        </div>
        <div className='form_image'>
            <img src="/images/Service.svg" alt="" />
        </div>
    </section>
    </>
  )
}

export default ContactForm