import React from 'react'
import '../styles/Home.css';
import TypedText from '../components/TypedText';
import AboutUs from '../components/AboutUs';



export default function Home() {


    return (
    <div className='container'>
         <h2>PCL ! all about&nbsp;<TypedText Mind={"Mind"} Planning={"Planning"} Strategy={"Strategy"} /></h2>
        {/* Provide an overview of the tournament */}

          <div className="container">
                 
                        <AboutUs />

                  
          </div>
       
    </div>
  )
}
