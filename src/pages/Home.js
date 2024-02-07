import React from 'react';
import '../styles/Home.css';
import TypedText from '../components/TypedText';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';



export default function Home() {


    return (
    <div className='container'>
         <h2><span>PCL ! all about&nbsp;</span><TypedText Mind={"Mind"} Planning={"Planning"} Strategy={"Strategy"} /></h2>
        {/* Provide an overview of the tournament */}

          <div className="container">
                 
                        <AboutUs />
                        <ContactUs />
                  
          </div>
       
    </div>
  )
}
