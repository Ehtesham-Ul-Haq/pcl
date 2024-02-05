import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function TypedText(props) {

    useEffect(() => {
        
        // Options for the Typed.js instance

        const options = {
          strings: [props.Mind, props.Planning, props.Strategy],
          typeSpeed: 50,
          backSpeed: 25,
          loop: true,
        };
    
        // Create a new Typed instance
    
        const typed = new Typed('#typed-text', options);
    
        // Clean up the Typed instance on component unmount
        return () => {
          typed.destroy();
        };
      }, []); // Empty dependency array ensures useEffect runs only once
    
  return (
    <div id="typed-text"></div>
  )
}