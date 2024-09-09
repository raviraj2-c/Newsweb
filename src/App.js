import React, { Component } from 'react'
import Navbar from './contaner/Navbar';
import News from './contaner/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>

       <Navbar/> 
   
       <BrowserRouter>
       <Routes>
        <Route path='health' element={<News sizeofpage={5} country="us" category='health'/>}/>
        <Route path='business' element={<News sizeofpage={5} country="us" category='business'/>}/>
        <Route path='entertainment' element={<News sizeofpage={5} country="us" category='entertainment'/>}/>
        <Route path='general' element={<News sizeofpage={5} country="us" category='general'/>}/>
        <Route path='science' element={<News sizeofpage={5} country="us" category='science'/>}/>
        <Route path='sports' element={<News sizeofpage={5} country="us" category='sports'/>}/>
        <Route path='technology' element={<News sizeofpage={5} country="us" category='technology'/>}/>
       </Routes>
       </BrowserRouter>












      </div>
    )
  }
}

export default App
