import React from 'react'
import './Header.css'
import burger from './images/burger1.png'
import logo from './images/logo.png'

function Header() {
  return (
    <div className='header-container'>
     
        <nav className="navbar navbar-expand-lg  bg-transparent text-black">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" />

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
    <div className='contact-box'>
        <p>Express-Delivery +1234 567890</p>
    </div>
   
      <ul className="navbar-nav ms-md-auto gap-2 mt-5">
 
        <li className="nav-item rounded">
          <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-house-fill me-2"></i>HOME</a>
        </li>
        <li className="nav-item rounded">
          <a className="nav-link text-dark" href="/"><i className="bi bi-people-fill me-2"></i>MENU</a>
        </li>
        <li className="nav-item rounded">
          <a className="nav-link text-dark" href="/"><i className="bi bi-telephone-fill me-2"></i>OUR STORY</a>
        </li>
        <li className="nav-item rounded">
          <a className="nav-link text-dark" href="/"><i className="bi bi-telephone-fill me-2"></i>CONTACT US</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<div className="vh-100 d-flex flex-row">
    <div className="col">
    <div className="">
        <div className='tag_line_box'>
            <p>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
            
        </div>
        <div className="title_box">
            <h1 className='title'>BURGER</h1>
            <h4 className='title_2'>WEEK</h4>
        </div>
    </div>
    </div>
  
  <div className="col d-flex justify-content-center align-items-center mt-5">
    <img src={burger} alt="burger" width="600px" height="500px "/>

  </div>
</div>
{/* <div className="bg-dark text-white">
  <p className="text-center p-4 m-0">Footer Content</p>
</div> */}
      
    </div>
  )
}

export default Header
