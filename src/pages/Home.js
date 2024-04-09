import React from "react";
import {Link} from "react-router-dom" ;
import plant1 from "../assets/Plant 1.png"
import plant2 from "../assets/pexels-mikhail-nilov-6707632-removebg-preview 1.png"
import light from "../assets/pexels-eneida-nieves-1112598 1.png"
import lamp from "../assets/lamp-thai-style 1.png"
import oval from "../assets/Ellipse 1.png"
import "../styles/Home.css";


import img1 from "../assets/pexels-max-rahubovskiy-6492393 1 (2).png"
import img2 from "../assets/pexels-max-rahubovskiy-6492393 1 (1).png"
import img3 from "../assets/pexels-max-rahubovskiy-6492393 1.png"

import pic1 from "../assets/Image (23).png"
import pic15 from "../assets/Image (22).png"
import pic2 from "../assets/Image (1).png"
import pic3 from "../assets/Image (2).png"
import pic4 from "../assets/Image (4).png"
import pic5 from "../assets/Image (5).png"
import pic6 from "../assets/Image (6).png"
import pic7 from "../assets/Image (7).png"
import pic8 from "../assets/Image (8).png"
import pic9 from "../assets/Image (9).png"
import pic10 from "../assets/Image (10).png"
import pic11 from "../assets/Image (11).png"
import pic12 from "../assets/Image (12).png"
import pic13 from "../assets/Image (13).png"
import pic14 from "../assets/Image (14).png"






import photo from "../assets/pexels-ono-kosuki-5973966 1.png"

import quote from "../assets/Icon pack.png"

import avatar1 from "../assets/Ellipse 1 (1).png"

import avatar2 from "../assets/Ellipse 1 (2).png"
import avatar3 from "../assets/Ellipse 1 (3).png"

import backImage from "../assets/wepik-export-20240406110548LdcI.png"
import mail from "../assets/Leading Icon.png"
import fb from "../assets/Facebook - Negative.png"
import twtr from "../assets/Twitter - Negative.png"
import insta from "../assets/Instagram - Negative.png"

import logo from "../assets/Logo.png"
import homvb from "../assets/HomeVibes.png"

<meta name="viewport" content="width=device-width,initial-scale=1"/>
function Home() {
  return (
    <div>
    <div className="home">
      <div className="BoxText">
        <div className="Text1">
          New arrivals
          </div>
          </div>
          
        <div className="picbg">
        <div className="pictures">
          <div className="BestS">Best Sellers</div>
          <div className="lamp"><img src={lamp}/></div>
          <div className="plant1"><img src={plant1}/></div>
          <div className="plant2"><img src={plant2}/></div>
          <div className="light"><img src={light}/></div>
          <div className="oval"><img src={oval}/></div> 
        </div>
         </div>
    </div>



   


<div class="home-container">
  
  <div class="homepic">
    <div class="box">
      <div class="f">FURNITURE</div>
      <div class="images">
      <div className="image-cell">  <img src={pic1} /> </div>
                  <div className="image-cell">  <img src={pic15} /></div>
                  <div className="image-cell"> <img src={pic2}/></div>
                  <div  className="image-cell">   <img src={pic3} /></div>
                  <div className="image-cell">   <img src={pic4}/></div>
      </div>
    </div>
  </div>

  
  <div class="homepic">
    <div class="box">
      <div class="f">DECOR</div>
      <div class="images">
      <div className="image-cell"> <img src={pic5} className="im2"/></div>
      <div className="image-cell"><img src={pic6} className="im21"/> </div> 
      <div className="image-cell"> <img src={pic7} className="im22"/></div>
      <div className="image-cell"> <img src={pic8} className="im23"/></div>
      <div className="image-cell"><img src={pic9} className="im24"/></div>
      </div>
    </div>
  </div>

  
  <div class="homepic">
    <div class="box">
      <div class="f">LIGHTINING</div>
      <div class="images">
      <div className="image-cell"> <img src={pic10} /></div>
                <div className="image-cell"> <img src={pic11} /></div>
                <div className="image-cell"><img src={pic12} /> </div>
                <div className="image-cell"><img src={pic13} /></div>
                <div className="image-cell"><img src={pic14} /></div>
      </div>
    </div>
  </div>
</div>




















































    <div className="home2">
      <div className="TextHead">Exciting Collections</div>
      <div className="TextHead2">curated specially for you</div>
      <div className="Images">
        <div className="Img1"><img src={img1}/> <div className="middle"><button type="button">View collection</button></div></div>
        <div className="Img2"><img src={img2}/><div className="middle"><button type="button">View collection</button></div></div>
        <div className="Img3"><img src={img3}/><div className="middle"><button type="button">View collection</button></div></div>
        
      </div>
    </div>


    <div className="home3">
      <div className="photo">
        <img src={photo}/>
      </div>
      <div>
      <div className="ShortText">Designers and Makers</div>
      <div className="script">Discover the artistry and craftsmanship behind HomeVibe with our skilled designers and makers 
      <div><button type="button">know more</button></div></div>
      <div className="Zangmo">Zangmo</div>
      </div>
     
    </div>

    <div className="home4">
      <div className="AllBox">
        <div className="box1">
          <div className="quote">
          <img src={quote}/>
          </div>
          <div className="Inside">
          I purchased a set of outdoor furniture from this company and I am so impressed with the durability and design. The furniture has held up well in all types of weather and the cushions are easy to clean.
          </div>
          </div>
        <div className="box2"> 
        <div className="quote">
        <img src={quote}/>
        </div>
        <div className="Inside">
        I recently purchased a sectional sofa from this company and I have been extremely pleased with it. The fabric is high quality and the cushions are very comfortable. The delivery process was smooth and hassle-free. I highly recommend HomeVibes
        </div>
        </div>
        <div className="box3">
        <div className="quote">
           <img src={quote}/>
           </div>
           <div className="Inside">
           "I purchased a bed frame from this furniture brand and it exceeded my expectations. The quality is top-notch and the design is modern and sleek. The customer service was also fantastic, and the delivery was prompt. I highly recommend this furniture brand
           </div>
           </div>
      </div>
    </div>

    <div className="avatar">
          <div id="av1"><img src={avatar1}></img></div>
          <div id="av2"><img src={avatar2}></img></div>
          <div id="av3"><img src={avatar3}></img></div>
        </div>

    <div className="home5">
      <img src={backImage}></img>
      <div className="logos">
        <img src={mail}/> <div id="mail">Email us @ xyz@HomeVibes.com</div>
        <img src={fb}/>
        <img src={insta}/>
        <img src={twtr}/>
      </div>
      <div className="details">
      <div id="conct"> Contact us</div>
      <div id="name">Full Name <input type="text" id="inpt"></input></div>
      <div id="name">E-Mail    <input type="text" id="inpt1"></input></div>  
      <div id="name">Message   <input type="text" id="inpt"></input></div>
      <button type="button" id="bt">contact us</button>
      </div>


      <div className="home6">
        <div className="logo">
          <img src={logo} id="smallLogo"/>
            <img src={homvb} id="homevb"/>
           </div>
<div className="BigBox">
        <div className="boxFooter1">  
        <div className="textFooter">Keep up to date with new collection and festive sales</div>
        <div className="divMail"><input type="email" placeholder="Enter email" id="input2"></input><button type="button" id="bt2">Subscribe</button></div>
        <div className="policy">We respect your privacy, we’ll not spam you ! Read our <a href='/'>privacy policy</a> here.</div>
        <div className="tc">
        <div>TERMS & CONDITIONS</div>
        <div >PRIVACY POLICY</div>   
        </div> 
        </div> 

        <div className="boxFooter2">
        <div className="side">
          <div className="side1">
            <ul>
              <li id="comp">COMPANY </li>
              <li>About us</li>
              <li>Carrers</li>
              <li>Contact Us</li>
              <li>Find a Showroom</li>
            </ul>
          </div>
          <div className="side2">
            <ul>
              <li id="prod">PRODUCT </li>
              <li>Catergories</li>
              <li>New Arrivals</li>
              <li>Best Seller</li>
              <li>Collections</li>
            </ul>
          </div>
          </div>    
      </div>
      </div>
      </div>



    </div>    

















    </div>



    

    
  
  );
}

export default Home;
