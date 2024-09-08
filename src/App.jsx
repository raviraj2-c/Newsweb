import './App.css';

import React, { Component } from 'react'
import Navbar from './contaner/Navbar';
import News from './contaner/News';


export class App extends Component {
  render() {
    return (
      <div>

       <Navbar/> 
       <News sizeofpage={5} country="in" category='health'/>
{/* <Routes>

<Route path="/" element={<News sizeofpage={5} country="in" category='health'/>} />
<Route path="/" element={<News sizeofpage={5} country="in" category='business'/>} />
<Route path="/" element={<News sizeofpage={5} country="in" category='entertainment'/>} />
<Route path="/" element={<News sizeofpage={5} country="in" category='general'/>} />
<Route path="/" element={<News sizeofpage={5} country="in" category='science'/>} />
<Route path="/" element={<News sizeofpage={5} country="in" category='sports'/>} />
<Route path="/" element={<News sizeofpage={5} country="in" category='technology'/>} />




</Routes> */}


      </div>
    )
  }
}

export default App
