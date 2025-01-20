import "./App.css"
import { Link } from "react-router-dom"

export default function Nav () {

  return(

    <div className="nav">
     
    <Link to="/Songs"  style={{color:"red" ,textDecoration:"none", fontSize:"2rem"}} ><p>Songs</p></Link>
    
    </div>
  )
}
