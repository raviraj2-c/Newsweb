import React, { Component } from 'react'
import Navbar from './contaner/Navbar';
import News from './contaner/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export class App extends Component {
  pagesize=6;
  apikey= process.env.REACT_APP_NEWS_API ;
  render() {
    return (
      <div>

       <Navbar/> 
   
       <BrowserRouter>
       <Routes>
        <Route path='health' element={<News sizeofpage={this.pagesize}apikey={this.apikey} country="us" category='health'/>}/>
        <Route path='business' element={<News sizeofpage={this.pagesize}apikey={this.apikey} country="us" category='business'/>}/>
        <Route path='entertainment' element={<News sizeofpage={this.pagesize} apikey={this.apikey}country="us" category='entertainment'/>}/>
        <Route path='general' element={<News sizeofpage={this.pagesize}apikey={this.apikey} country="us" category='general'/>}/>
        <Route path='science' element={<News sizeofpage={this.pagesize}apikey={this.apikey} country="us" category='science'/>}/>
        <Route path='sports' element={<News sizeofpage={this.pagesize} apikey={this.apikey}country="us" category='sports'/>}/>
        <Route path='technology' element={<News sizeofpage={this.pagesize} apikey={this.apikey}country="us" category='technology'/>}/>
       </Routes>
       </BrowserRouter>












      </div>
    )
  }
}

export default App
