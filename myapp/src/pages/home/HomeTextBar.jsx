import React from 'react'
import styled from 'styled-components'

export const HomeTextBarContainer=styled.div`
width:100%;
text-align:center;
font-weight:bold;
background-color:black;
color:white;
padding:1% 10%;
margin-top:2rem;
h2{
    color:white;
    padding:0.3em;
};
p{
    color:grey;
    padding-bottom:0.3em;
}
`

function HomeTextBar() {
  return (
    <HomeTextBarContainer>
        <h2>Create Your Own Genuine WebMasterpeice</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi deserunt vero adipisci et. Voluptate, earum asperiores velit repudiandae, </p>
    </HomeTextBarContainer>
  )
}

export default HomeTextBar