import React from 'react'
import styled from 'styled-components'
import akari from '../../assets/akari.webp'
import holt from '../../assets/holt.webp'
import paul from '../../assets/paul.webp'
import andrew from '../../assets/andrew.webp'

export const HomeGalleryContainer=styled.div`
width:100%;
padding:4% 5%;
background-color:white;
color:grey;
display:flex;
align-items:center;
justify-content:center;

.home-gal{

    width:20%;
    margin:0.5em 1.5em;


    .home-gal-item{
        margin:0.5em 0.7em;
        width: 60%;
        height:10em;
        border-radius:50%;
        border:1px solid lightgrey;
        position:relative;
        overflow:hidden;
        margin:0 auto;
    
        &:hover p{
            opacity:0.7;
    
        }
    
        img{
            width:100%;
            height:100%;
        }
    
        p{
            position:absolute;
            width:100%;
            height:100%;
            opacity:0;
            background-color:black;
            text-align:center;
            top:0;
            left:0;
            transition:0.5s;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight:bolder;
            font-size:1.2em;
        };
    
        .home-gal-item-text{
            display:inline-block;
        }
    }


}


`

function HomeGallery() {
  return (
    <HomeGalleryContainer>
        <div className='home-gal'>
        <div className='home-gal-item'>
        <img  alt='image' src={akari}/>
        <p>Dextor Gilbert</p>
        </div>


        <div className='home-gal-item-text'>
            <h5>Dextor Gilbert</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.</p>
        </div>
        </div>
        <div className='home-gal'>
        <div className='home-gal-item'>
        <img  alt='image' src={holt}/>
        <p>Mary Collier</p>
        </div>


        <div className='home-gal-item-text'>
            <h5>Mary Collier</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.</p>
        </div>
        </div>

        <div className='home-gal'>
        <div className='home-gal-item'>
        <img  alt='image' src={andrew}/>
        <p>Stefan Morrison</p>
        </div>


        <div className='home-gal-item-text'>
            <h5>Stefan Morrison</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.</p>
        </div>
        </div>

        <div className='home-gal'>
        <div className='home-gal-item'>
        <img  alt='image' src={paul}/>
        <p>Bill Smith</p>
        </div>


        <div className='home-gal-item-text'>
            <h5>Bill Smith</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.</p>
        </div>
        </div>
    </HomeGalleryContainer>
  )
}

export default HomeGallery