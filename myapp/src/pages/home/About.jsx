import React from 'react'
import styled from 'styled-components';
import { GlobalButton } from '../../StyleApp';





export const AboutContainer=styled.div`
width:100%;
padding:1% 5%;
background-color:black;;
color:white;

h1{
    text-align:left;
    font-size:1.6em;
    margin-bottom:1em;
};



.about-video{
    width:100%;
    padding:5%;
    // background-color:#ccd05d;
    // background-color: rgba(255, 0, 0, 0.2);
    // color:white;
    display:flex;
    align-items:start;
    p{
        text-align:justify;
    };
    justify-content:space-between;
    @media only screen and (max-width:680px){
        display:inline-block
    }

    .video-title{
        display:inline-block;
        text-align:left;
        width:40%;
        @media only screen and (max-width:680px){
            width:100%;
        };
    };

    .video-frame{
width:58%;
height:25em;
@media only screen and (max-width:680px){
    width:100%;
}
    };
}


`

function About() {
  return (
    <> 
     
    <AboutContainer>
       
        <div className='about-video'>
            
            <div className='video-frame'>
                <iframe
                width="100%" height="100%" src="https://www.youtube.com/embed/8Cyw-5xliok"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className='video-title'>
            <h1>What are your waiting for?<br/>
            Start Today.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus animi quo, cupiditate similique consequatur error eveniet odio dignissimos recusandae ea.</p>
            <GlobalButton>Find Out More</GlobalButton>
            </div>
        </div>
    </AboutContainer>
    </>
  )
}

export default About