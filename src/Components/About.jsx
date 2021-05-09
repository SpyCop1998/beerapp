import React from 'react';
function About(props) {
    return (
        <div id='about'>
        <div className ='about-image'>
        <img src={props.image} alt=''/>
        </div>

        <div className='about-text'>
        
        <h2>{props.title}</h2>

        <p>The href attribute requires a 
        valid value to be accessible. Provide a
         valid, navigable address as the href value.
          If you cannot provide a valid href,
           but still need the element to resemble a 
           link, use a button and change it with 
           appropriate styles.</p>

           <button>{props.button}</button>

        </div>
     

        </div>
    );
}
export default About;