import { Routes, Route, Link, NavLink } from "react-router-dom";
import Blue from "./Blue.jsx";
import Red from "./Red.jsx";
import Home from "./Home.jsx";



function App(){
  
return (
  <>
<div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
      <Link to='/blue'>BLUE</Link>
      <Link to='/red' >RED</Link>
      <Link to='/' >HOME</Link>
      
</div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" Component={Blue} element={<h1>BLUE</h1>}   />      
           <Route path="/red" Component={Red} element={<h1>RED</h1>} />
           <Route path="/" Component={Home} element={<h1>HOME</h1>}/>     
        </Routes>
</div>
</div>




  </>
)}




 

export default App;
