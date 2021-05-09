import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature'
import About from './Components/About'
import Presentation from './Components/Presentation'
import aboutimage from './images/about.png'
import downloadimage from './images/download.png'

function App() {
  return (
    <div>
      <Header/>
      <Feature/>
      <Presentation/>
      <About image={aboutimage}
       title='Extend your business' button='Get the app'/>
       
    </div>
  );
}

export default App;
