import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href='/business' >JHC News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="/">Home</a>
        </li>
{/* 
        <li className="nav-item"><a className="nav-a" href="/business"> business</a> </li>
        <li className="nav-item"><a className="nav-a" href="/entertainment">entertainment </a></li>
        <li className="nav-item"><a className="nav-a" href="/general"> general</a></li>
        <li className="nav-item"><a className="nav-a" href="/health"> health</a></li>
        <li className="nav-item"><a className="nav-a" href="/science"> science</a></li>
        <li className="nav-item"><a className="nav-a" href="/sports"> sports</a></li>
        <li className="nav-item"><a className="nav-a" href="/technology"> technology</a></li> */}
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
