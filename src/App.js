 
import './App.css';
import Home from './Home';
import Songs from './Songs';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
   <Routes >
   <Route path="/" element={<Home/>}/>
   <Route path="/Songs" element={<Songs/>}/>
   <Route path="/Home" element={<Home/>}/>
   </Routes>
    </div>
  );
}

export default App;
