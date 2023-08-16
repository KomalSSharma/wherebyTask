import React , {useState} from 'react'
import styled from 'styled-components'
import {FcHome} from 'react-icons/fc'



export const AddProductContainer=styled.div`
width:100%;
display:inline-block;
margin-top:2em;

.add-product-top{
display:flex;
align-items:start;
justify-content:space-between;

  .add-product-img-container{
    width:50%;
    height:470px;
    overflow:hidden;
    position: relative;

    img{
      width:100%;
      height:100%;
    };


    .add-image-button {
      position: absolute;
      // top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2.7em;
      height: 2.7em;
      background-color: red;
      color: white;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    };

    input[type='file'] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    };
.add-product-small-img-container{
  display:flex;
  flex-wrap:wrap;
align-items:start;
justify-content:space-between;
// border:1px solid grey;
margin-top:27%;
margin-left:1em;
  img{
    width:7em;
    height:7em;
  }
}

  };

};

.add-product-bottom{

  display:inline-block;
  margin:2em 0;
  width:100%;

  dl{

    .product-text{
      display:flex;
      flex-wrap:wrap;
    align-items:start;
    justify-content:space-between;
    margin:1.5em 0;

    dt{
      width:30%;
      text-align:left;
      font-size:1.2em;
      color:grey;
    };

    dd{
      width:70%;

      input[type='text']{
        // height:2.5em;
        width:95%;
        border-radius:4px;
        padding:1em 0.5em;
        border:1px solid lightgrey;

      };
    };
    };

  };
button{
  background-color:dodgerblue;
  color:white;
  margin:0.5em;
}
 
}


`

function AddImage() {

const [images, setImages] = useState(new Array(5).fill(null));

  const handleImageChange = (event, buttonIndex) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[buttonIndex] = reader.result;
          return updatedImages;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const [value, setValue] = useState('');


  return (
   
    <>
    
    <AddProductContainer>
      <div className='add-product-top'>
       
        <div className='add-product-img-container'>
        {images.map((_, index) => (
            <div key={index} style={{ position: 'relative' , margin:'1em'}}>
              <label
                htmlFor={`file-upload${index + 1}`}
                className="add-image-button"
                style={{ top: `${30 + 55 * index}%` }}
              >
                +
              </label>
              <input
                type="file"
                id={`file-upload${index + 1}`}
                onChange={(e) => handleImageChange(e, index)}
                accept="image/*"
              />
              <br />
            </div>
          ))}
         
  <div className="add-product-small-img-container">
         {images.map((imageData, index) => (
              <img key={index} src={imageData} alt={`Image ${index + 1}`} />
            ))}
      </div>
        </div>
      </div>
     

     

        

        

       

        

      
    </AddProductContainer>
    </>
  )
}

export default AddImage