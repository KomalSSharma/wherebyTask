import React ,{useState} from 'react'
import styled from 'styled-components'
import akari from '../../assets/akari.webp'
import holt from '../../assets/holt.webp'
import paul from '../../assets/paul.webp'
import andrew from '../../assets/andrew.webp'

export const HomeGalContainer=styled.div`
width:100%;
padding:4% 5%;
background-color:white;
color:grey;

.home-gal-text{
    margin:3em 0;
};


.home-gal-items{
    display:flex;
    font-size:16px;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    border-radius:9px;

    .home-gal-item{
        width:20%;
        margin:0.5em;
        height:10em;
        border-radius:9px;
        overflow:hidden;
        position:relative;
       

        &:hover .home-input{
            opacity:0.8;
            
        }

        img{
            width:100%;
            // margin:0.5em;
            height:100%;
            // border:1px solid lightgrey;
            border-radius:9px;
        };
        .home-input{
            width:100%;
            // margin:0.5em;
            height:100%;
            border:1px solid lightgrey;
            // border-radius:9px;
            display:flex;
            // font-size:16px;
            justify-content:center;
            align-items:center;
            position:absolute;
            top:0;
            left:0;
            opacity:0;
            transition:0.5s;
            cursor:pointer;
            background-color:black;
            
            
            input[type='file'] {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                cursor: pointer;
              };
    
              label{
                width: 2em;
                height: 2em;
                background-color: red;
                color: white;
                border: none;
                border-radius: 50%;
                display:flex;
            // font-size:16px;
            justify-content:center;
            align-items:center;
            cursor:pointer;
              }
        };

    }
    

    
   
}
`

function HomeImageGal() {
    const [images, setImages] = useState([andrew,akari, paul, holt]); 

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const newImages = [...images];
      newImages[index] = e.target.result;
      setImages(newImages);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  
  
  
  return (
    <HomeGalContainer>
        <div className='home-gal-text'>
            <h2>Let them know why you are the <span style={{color:'#77a577', fontSize:'1.4em', fontWeight:'bold'}}>Best</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non animi assumenda dignissimos sapiente enim?</p>
        </div>

       
       
             <div className='home-gal-items'  >

             {images.map((image, index) => (
          <div className='home-gal-item' key={index}>
            <div className='home-input'>
              <label htmlFor='file' className='add-image-button'>+</label>
              <input
                type='file'
                accept='image/*'
                onChange={(event) => handleImageUpload(index, event)}
                id='file'
                name='file'
                />
            </div>
            <img src={image || defaultImage} alt={`Image ${index}`} />
          </div>
        ))}
            
            </div>
              
          
             
            

      
    </HomeGalContainer>
  )
}

export default HomeImageGal