import React from 'react'
import styled from 'styled-components'

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
    

    img{
        width:20%;
        margin:0.5em;
        height:10em;
        border:1px solid lightgrey;
        border-radius:9px;
    };
    div{
        width:20%;
        margin:0.5em;
        height:10em;
        border:1px solid lightgrey;
        border-radius:9px;
        display:flex;
        // font-size:16px;
        justify-content:center;
        align-items:center;
        
        
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
          }
    };
   
}
`

function HomeImageGal() {
  return (
    <HomeGalContainer>
        <div className='home-gal-text'>
            <h2>Let them know why you are the <span style={{color:'#77a577', fontSize:'1.4em', fontWeight:'bold'}}>Best</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non animi assumenda dignissimos sapiente enim?</p>
        </div>

        <div className='home-gal-items'>
            <img alt='image'/>
            {/* <img alt='image'/> */}

            <div  style={{ position: 'relative' , margin:'1em'}}>
              <label
                // htmlFor={`file-upload${index + 1}`}
                className="add-image-button"
                // style={{ top: `${30 + 55 * index}%` }}
              >
                +
              </label>
              <input
                type="file"
                // id={`file-upload${index + 1}`}
                // onChange={(e) => handleImageChange(e, index)}
                accept="image/*"
              />
              <br />
            </div>



            <img alt='image'/>
            <img alt='image'/>

        </div>
    </HomeGalContainer>
  )
}

export default HomeImageGal