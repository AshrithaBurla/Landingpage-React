import React from "react";
import Nav from '../assets/Leading Icon (1).png';
import text from '../assets/HomeVibes (1).png';
import Search from '../assets/Leading Icon (2).png';
import heart from '../assets/Leading Icon (3).png';
import Shop from '../assets/Leading Icon (4).png';
import login from '../assets/Log In CTA.png';

import '../styles/Navbar.css';


function Navbar() {
  return (
    <div className="Main"> 
      <div className="navbar">
              <div className="leftSide">q
                <img src={Nav}/>
                <img src={text} id="text"/>
                </div>
              <div className="rightSide">
                <a href="/"><img src={Search}/> </a>       
                <a href="/heart"> <img src={heart}/>  </a>
                <a href="/shop"> <img src={Shop}/> </a>
                <a href="/login" id="login"> <img src={login}/>  </a>
              </div>  

              
      </div>
      <div className="textNav">Crafted with passion, designed for comfort</div>
      <div className="navButtons">
      <div className="Navbut"><button type="button">View our latest collection</button></div>
      
      <div className="Navbut" id="navbut1"><button type="button">Browse Categories</button></div>
      </div>
      
    </div>
  );
}

export default Navbar
