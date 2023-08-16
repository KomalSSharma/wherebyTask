import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components'
import spinner from '../../assets/spinner.png'
import red from '../../assets/red.png'
import vintage from '../../assets/vintage.png'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'


export const SliderContainer= styled.div`
width:100%;
padding:0 5%;
// border:1px solid grey;
// background-color:#77a577;

.slider-container{
    width:100%;
    padding: 5% 12%;
    // border:1px solid grey;
.left{
    font-size:1.2em;
};
   
    

    .slider-item{
        width:100%;
        // border:1px solid red;
        display:flex;
    align-items:center;
    justify-content:center;

    .slick-prev{
        width: 53px;
    height: 40px;
    };

        .slider-img{
            width:50%;
            overflow:hidden;
            // padding:1em;
            font-size:16px;
            // border:1px solid yellow;
    //         display:flex;
    // align-items:start;
    // justify-content:flex-end;
            img{
                // width: 19em;
                // height: 12em;
                width: 20em;
                height: 20em;
                float:right;
            };
        };

        .slider-text{
            display:inline-block;
            width:50%;
            overflow:hidden;
            // padding:1em;
            h1{
                text-align:left;
                font-size:3.6em;
                width:43%;
                letter-spacing:4px;
                // margin-top: 0.5em;
                color:white;
                font-weight:200;

                h2{
                    font-weight:900;
                    color:white;
                }
            };
            p{
                text-align:left;
                font-size:1.2em;
                color:white;
            }
        }
    };
};



`

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FaChevronLeft
        className={className}
        style={{ ...style, display: "block", background: "transparent", color:'white', fontSize:'38px', width:'55px' , height:'60px', fontWeight:900 , left:'12px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <FaChevronRight
        className={className}
        style={{ ...style, display: "block", background: "transparent", color:'white', fontSize:'38px', width:'55px' , height:'60px', fontWeight:'bolder' , right:'8px'}}
        onClick={onClick}
      />
    );
  }

const sliderData=[
    {
        id:1,
        src:vintage,
        title:'Awesome',
        titleLower:'Website Template',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis et earum eum temporibus architecto? Animi eligendi eum magni cum!Animi eligendi eum magni cum!Animi eligendi eum magni'
    },
    {
        id:2,
        src:red,
        title:'Mesmerizing',
        titleLower:'Website Template',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis et earum eum temporibus architecto? Animi eligendi eum magni cum!Animi eligendi eum magni cum!Animi eligendi eum magni'
    },
    {
        id:3,
        src:spinner,
        title:'Beautiful',
        titleLower:'Website Template',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis et earum eum temporibus architecto? Animi eligendi eum magni cum!Animi eligendi eum magni cum!Animi eligendi eum magni'
    },
]
function HomeSlider() {

    const settings = {
        dots: true,
        fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SamplePrevArrow/>,
      prevArrow: <SampleNextArrow />
      };

  return (
    <SliderContainer>
         
        <Slider {...settings}>
         
            {sliderData && sliderData.map((item)=>
                <div className='slider-container'>
<div className='slider-item' key={item?.id}>
<div className='slider-img'>
    <img src={item?.src} alt='logo'/>
</div>
<div className='slider-text'>
    <h1>{item?.title}
        <h2 >
        {item?.titleLower}
            </h2>
            </h1>
    <p>{item?.des}</p>
</div>
</div>
</div>
            )}
           
        
        </Slider>
        
      </SliderContainer>
  )
}

export default HomeSlider