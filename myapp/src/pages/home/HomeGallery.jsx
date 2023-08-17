import React from 'react'
import styled from 'styled-components'
import akari from '../../assets/akari.webp'
import holt from '../../assets/holt.webp'
import paul from '../../assets/paul.webp'
import andrew from '../../assets/andrew.webp'
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

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

const variants = {
    visible: { opacity:1 },
    hidden: { opacity:0 }, 
  };

  const galleryImageData = [
    {
        id:1,
        src:andrew,
        name:'Andrew Morison',
        intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.'
    },
    {
        id:2,
        src:paul,
        name:'Paul Stefan',
        intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.'
    },
    {
        id:1,
        src:holt,
        name:'Mary Clarie',
        intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.'
    },
    {
        id:1,
        src:akari,
        name:'Akari Gonsari',
        intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.'
    },
  ]

function HomeGallery() {
  return (
    <HomeGalleryContainer>
{galleryImageData && galleryImageData.map((item, index) => (
        <InView key={item.id}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className='home-gal'
              variants={variants}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className='home-gal-item'>
                <img alt='image' src={item.src} />
                <p>{item.name}</p>
              </div>
              <div className='home-gal-item-text'>
                <h5>{item.name}</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quo.</p>
              </div>
            </motion.div>
          )}
        </InView>
      ))}


    </HomeGalleryContainer>
  )
}

export default HomeGallery