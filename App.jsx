import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {DropdownButton, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarText} from 'react-bootstrap' ;


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{backgroundColor : "blue", margin:"0", padding:"0", overflowX:"hidden", height:"100vh", width:"100vw"}}>
      <Navbar> <NavbarBrand style={{ color:"white"}}> Book Recommendation System </NavbarBrand> 
      <ul>
        <li> <Navbar> <Nav  style={{ color:"white"}}> HI </Nav></Navbar></li>
       
        {/* <li><Nav> Recommend </Nav></li>
        <li><Nav> Contact </Nav></li> */} */
      </ul>
    </Navbar>
      console.log("Hi")
        <p > Book Recommender</p>

 
     </div>
    </>
  )
}

export default App
