import React , {useState} from 'react'
import styled from 'styled-components'
import {TbWorldSearch , TbDeviceLaptop} from 'react-icons/tb'
import {BsChatLeftDots} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'

export const HomeActiveContainer=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
background-color:white;
color:grey;
padding:4% 5%;
font-size:16px;

.home-active-item{
    width:20%;
    display:inline-block;
    text-align:center;
    margin:1rem;
    cursor:pointer;
    // border:1px solid green;

    

    .home-active-color{

        padding:1.2rem;
        border:3px solid transparent;
        width:5rem;
        height:5rem;
        margin:1.5em auto;
        border-radius:50%;
        display:flex;
            align-items:center;
            justify-content:center;

          

        .home-active-img{
            width:3rem;
            height:3rem;
            margin:1.5em auto;
            border-radius:50%;
            padding:1rem;
            // border:1px solid black;
            text-align:center;
            background-color:black;
            display:flex;
            align-items:center;
            justify-content:center;
    
            .home-active-icon{
                font-size:1.5rem;
                color:white;
                // background-color:black;
                
            };
        };

        .home-active-img-active{
            background-color:#77a577;  
        };

       

    };
    .home-active-color-blue{
        border:3px solid #77a577;

    };

    

    .home-active-text{
        .home-active-title{
            color:black;
            font-weight:600;
        };

        .home-active-title-active{
            color:#77a577;
        };

        .home-active-des{
            font-size:0.9em;
        };
    };
};
`
const homeActiveData=[
    {
        id:1,
        icon:<TbWorldSearch/>,
        title:'Research',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio soluta perspiciatis omnis labore, nostrum dolorem  '
    },
    {
        id:2,
        icon:<TbDeviceLaptop/>,
        title:'Fully Customizable',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio soluta perspiciatis omnis labore, nostrum dolorem  '
    },
    {
        id:3,
        icon:<BsChatLeftDots/>,
        title:'Coordination',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio soluta perspiciatis omnis labore, nostrum dolorem  '
    },
    {
        id:4,
        icon:<FiSettings/>,
        title:'Test',
        des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio soluta perspiciatis omnis labore, nostrum dolorem  '
    },
]
function HomeActive() {

   const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId === activeItem ? null : itemId);
  };

  const isItemActive = (itemId) => activeItem === itemId;


  return (
    <HomeActiveContainer>
        {
            homeActiveData && homeActiveData.map((item)=>

            <div 
            className='home-active-item'
            // className={`home-active-item ${isItemActive(item.id) ? 'active' : ''}`}
            key={item?.id}
           onClick={() => handleItemClick(item.id)}
            >
                <div 
                className={`home-active-color ${isItemActive(item.id) ? 'home-active-color-blue' : ''}`}
                // className={`home-active-color ${activeItem === item.id ? 'active' : ''}`} 
                // className='home-active-color'
                >
                <div 
                
                className={isItemActive(item.id) ? ' home-active-img home-active-img-active' : 'home-active-img'}
                // className={`home-active-img ${activeItem === item.id ? 'active' : ''}`} 
                // className='home-active-img'
                >
        <div 
        // className={`home-active-icon ${isItemActive(item.id) ? 'active' : ''}`}
        // className={`home-active-icon ${activeItem === item.id ? 'active' : ''}`} 
        className='home-active-icon'
        >
        {item?.icon}
        </div>
        
    </div>
                </div>
    
    <div className='home-active-text'>
        <h4 
        // className={`home-active-color ${isItemActive(item.id) ? 'home-active-color-blue' : ''}`}
        className={isItemActive(item.id) ?'home-active-title home-active-title-active': 'home-active-title'}
        >{item?.title}</h4>
        <p className='home-active-des'>{item?.des}</p>
    </div>

</div>
            )
        }

    </HomeActiveContainer>
  )
}

export default HomeActive