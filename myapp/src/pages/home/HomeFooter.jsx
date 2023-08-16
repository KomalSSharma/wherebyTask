import React from 'react'
import styled from 'styled-components'
import { GlobalButton } from '../../StyleApp'
import spinner from '../../assets/spinner.png'
import red from '../../assets/red.png'
import vintage from '../../assets/vintage.png'

export const HomeFooterContainer=styled.div`
width:100%;
padding:4% 5%;
display:flex;
align-items:start;
justify-content:space-between;
background-color:white;
color:grey;

.footer-video-title{
    width:50%;
    text-align:left;
};
.footer-right{
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:50%;
    flex-wrap:wrap;
    overflow:hidden;

    .footer-item{
        padding:1em;
        width:30%;
        img{
            width:7em;
            height:5em;
            margin:0 auto;
        }
    }
}
`
const imageData=[
    {
        id:1,
        src:spinner,
    },
    {
        id:2,
        src:red,
    },
    {
        id:3,
        src:spinner,
    },
    {
        id:4,
        src:vintage,
    },
    {
        id:5,
        src:red,
    },
    {
        id:6,
        src:vintage,
    }
]
function HomeFooter() {
  return (
    <HomeFooterContainer>
        <div className='footer-video-title'>
            <h1>Beautiful layouts</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro atque quibusdam eius odio voluptate dolores itaque incidunt impedit animi nesciunt unde veritatis ducimus id voluptatem, saepe voluptates alias aut praesentium neque! Rem, perspiciatis minus. Dignissimos id, unde sint maxime rerum sunt esse blanditiis consequatur labore totam eligendi assumenda velit quidem..
            Dignissimos id, unde sint maxime rerum sunt esse blanditiis consequatur labore totam eligendi assumenda velit quidem..
            </p>
            
            </div>

        <div className='footer-right'>
            {imageData && imageData.map((item)=>

            <div className='footer-item' key={item?.id}>
            <img alt='image' src={item?.src}/>
        </div>
            )}
            
            
        </div>
    </HomeFooterContainer>
  )
}

export default HomeFooter