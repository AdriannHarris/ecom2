import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
height: 100px;
width: 100%;
font-family: "Open Sans";
padding-top: 10px;
margin-top: 200px;
background-color: black;

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    
`

const SocialContainer = styled.div`
list-style: none;
display: flex;
align-items: center;
justify-content: center;
margin: 16px;
`;

const Footer = () => {
    return (
        
        <Container>
            <Wrapper>
                <SocialContainer>
            <ul class="socials">
              <li><a href="https://facebook.com/" aria-label="Read more about Facebook"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/" aria-label="Read more aboutTwitter"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://googleplus.com/" aria-label="Read more about Google Plus"><i class="fa fa-google-plus"></i></a></li>
              <li><a href="https://youtube.com/" aria-label="Read more about Youtube"><i class="fa fa-youtube"></i></a></li>
              <li><a href="https://linkedin.com/" aria-label="Read more about Linkedin"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
              
                </SocialContainer>
            </Wrapper>
        </Container>
    )
}

export default Footer;