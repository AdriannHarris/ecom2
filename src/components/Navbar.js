import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import Form from './Form';
import '../components/navbar.css';


// function Navbar(){
//     return (
//       <div>
//         <Switch>
//           <Route exact path="/Home" component={Home} />
//           <Route exact path="/products" component={Products} />
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/hoff" component={Hoff} />
//         </Switch>
//       </div>
//     )
//   }



const Container = styled.div`
height: 60px;
background-color: black;

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    
`




 const Navbar = () => {
     return (
        
         <Container>
             <Wrapper>
                <ul>
                <li><a href="http://localhost:3000/" >Home</a></li>
                <li><a href="http://localhost:3000/products" component={Card}>Products</a></li>
                <li><a href="http://localhost:3000/contact" component={Form}>Contact Us</a></li>
             </ul>
           
            

            </Wrapper>
        </Container>
    )
}


//  const Navbar = () => {
//     const [showLinks, setShowLinks] = useState(false);
//     return (
//    <header>
//    <nav className="navbar">
//           <section className="leftSide">
//             <section className="links" id={showLinks ? "hidden" : ""}>
              
//               <a href="localhost:3000/Home">Home</a>
//               <a href="localhost:3000/Products">Products</a>
//               <a href="localhost:3000/Contact">Contact Us</a>
//               <a href="localhost:3000/Hoff">Hall of Fame</a>
//             </section>
//             <button
//               className="hamburger-button"
//               onClick={() => setShowLinks(!showLinks)}
//             >
//               <i class="fa fa-bars"></i>
//             </button>
//           </section>
//           <section className="rightSide">
//             <input type="text" placeholder="search" />
//           </section>
//         </nav>
  
//         <Outlet></Outlet>
//       </header> */
//     );
// };





export default Navbar;

