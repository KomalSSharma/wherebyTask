import styled from 'styled-components'

export const GlobalButton=styled.button`
padding:0.8rem 1rem;
background-color:dodgerblue;
color:white;
font-size:1.2rem;
transition:0.5s;
margin:0.4em;

&:hover{
    background-color:white;
    color:dodgerblue;
    border:1px solid dodgerblue;
};

@media only screen and (max-width:768px){
    font-size:1rem;
    padding:0.7rem 0.9rem;
}
`