import { Link } from "react-router-dom";
import "./App.css"
export default function Back (){
  return(
    <Link to="/Home" style={{textDecoration:"none"}} className="back">X</Link>
  )
}