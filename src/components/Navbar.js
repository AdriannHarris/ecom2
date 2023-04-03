import React, { useState } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import styled from 'styled-components';

import '../components/navbar.css';






// const Container = styled.div`
// height: 60px;
// background-color: black;

// `
// const Wrapper = styled.div`
//     padding: 10px 20px;
//     display: flex;
//     justify-content: space-between;
    
// `




// const Navbar = () => {
//     return (
        
//         <Container>
//             <Wrapper>
//             <ul>
//                 <li><a href="http://localhost:3000/home">Home</a></li>
//             </ul>
           
            

//             </Wrapper>
//         </Container>
//     )
// }


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
      <header>
        <nav className="navbar">
          <section className="leftSide">
            <section className="links" id={showLinks ? "hidden" : ""}>
              
              <a href="localhost:3000/Home">Home</a>
              <a href="localhost:3000/Products">Products</a>
              <a href="localhost:3000/Contact">Contact Us</a>
              <a href="localhost:3000/Hoff">Hall of Fame</a>
            </section>
            <button
              className="hamburger-button"
              onClick={() => setShowLinks(!showLinks)}
            >
              <i class="fa fa-bars"></i>
            </button>
          </section>
          <section className="rightSide">
            <input type="text" placeholder="search" />
          </section>
        </nav>
  
        <Outlet></Outlet>
      </header>
    );
  };





export default Navbar;

