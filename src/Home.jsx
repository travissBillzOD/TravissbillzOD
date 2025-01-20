import "./App.css"
import Nav from "./Nav"
import fb from "./icons/fb.png"
import mack from "./icons/audio.png"
import insta from "./icons/insta.png"
import tik from "./icons/tik.png"
import yt from "./icons/yt.png"

export default function Home (){
  return(
   <div>
   
      <div className="home-body">
     
         <Nav/>
         <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <ul className="logo">
      <li className="trav"><h1> TRAVISS BILLZ </h1></li>
      <li className="slogan"><span><i>soundS of the<span id="goat">GOATS</span></i></span></li>
          </ul>
          <div className="footer b">
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
        
          <footer>

        <ul>
          
        <li> <a href="https://www.instagram.com/billz_almighty?igsh=YzljYTk1ODg3Zg==" target="blank"> <img src={insta} alt=""/>   </a></li>
        <li><a href="https://www.facebook.com/TravissBillz"> <img src={fb}/> </a></li>
        <li><a href="https://www.tiktok.com/@billz_almighty?_t=ZM-8skVOg93Oj7&_r=1"> <img src={tik}/> </a></li>
        <li><a href="https://youtube.com/@travissbillz?si=xJH9e9cwbEyXT37O"> <img src={yt}/> </a></li>
        <li><a href="https://audiomack.com/travissbillz/song/charm-bucket?share-user-id=115773982"> <img src={mack}/> </a></li>
        
        </ul>  
          
          </footer>
          </div>
          <p style={{color:"purple",fontSize:"10px"}}>a FRANK creation</p>
      </div>

   </div>

  )
}








