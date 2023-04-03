import React from 'react';


function Car ({year, make, model, price, image, description, onReserve}){
    return (
        <div className="car">
            <li className="crop">
                <h2>{year} {make} {model}</h2>
                <p>Price: {price}</p>
                <img src={image} alt={`${make} ${model}`} />
            </li>
            <p>{description}</p>
            <button type="button" onClick={onReserve}>Reserve</button>
        </div>
    );
}

export default Car;




// import React from 'react';
// import styled from 'styled-components';


// const Container = styled.div`
// width: 100%;
// height: 100%;
// `;

// const Wrapper = styled.div`
// border-radius: 10px
// `;

// const CarContainer = styled.div`

// `;



// function Products(){
//     return (
//         <Container>
//         <Wrapper>
//         <Products>
//                 <CarContainer>
//                 <h1> 2018 Chevrolet Camaro ZL1 1LE</h1>
//                 <img src="https://www.motortrend.com/uploads/sites/21/2020/01/002-2018-Chevy-Camaro-Street-Track-Car_1_1.jpg" alt="camaro" />
//                 <p> With the 2018 6th generation Camaro silhouette, </p>
//                 <ul>
//                 <li>you get 810 horsepower,</li>
//                 <li>white exterior with carbon fiber details
//                 on the hood, truck and bumper,</li>
//                 <li>all black leather interior,</li>
//                 <li>and custom JDI sri coilovers.</li>
//                 </ul>
                
//                 </CarContainer>
//                 </Products>
//         </Wrapper>
//         </Container>
//     );
// };

// export default Products;