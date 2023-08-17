import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import brand from '../../assets/brand.svg'
import {FaAngleDown} from 'react-icons/fa'

export const HeaderContainer=styled.nav`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
padding:1% 5%;
font-size:16px;
box-shadow: 0px 13px 20px -20px rgba(0,0,0,0.45);
position:fixed;
z-index:18;
background-color: ${props => (props.scrollY > 10 ? '#B7B7B7' : 'transparent')};
transition: background-color 0.3s ease;
.header-left{
    width:30%;

    .header-img{
        height: 3.8em;
        width: 7em;
        overflow:hidden;
        cursor:pointer;

        img{
            width:100%;
            height:100%;

        }
    }
};

.header-right{
    width:70%;

    .header-list{
display:flex;
align-items:center;
justify-content:flex-end;
list-style:none;

        .header-list-item{
            text-transform:capitalize;
            font-size: 1.3em;
            border-bottom:1px solid transparent;
            transition:0.5s;
            color:white;
            font-weight:bold;
            margin:0 1em;
            display:flex;
            align-items:center;
            justify-content:center;;
            cursor:pointer;
            span{
                transition:0.5s;
                margin:0.2em;
                display:flex;
            align-items:center;
            justify-content:center;;
            }

            &:hover span{
transform:rotate(180deg)
            };
            &:hover{
                border-bottom:1px solid lightgrey;
                color:black;
            }

        }
    }
}
`
const headerData=[
    {
        id:2,
        list:'pages'
    },
    {
        id:3,
        list:'features',
        icon:<FaAngleDown/>
    },
    {
        id:4,
        list:'services'
    },
    {
        id:5,
        list:'blogs'
    },
    {
        id:6,
        list:'contact'
    },

]
function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
          console.log(scrollY)
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <HeaderContainer scrollY={scrollY}>
<div className='header-left'>
    <div className='header-img'>
    <img src={brand} alt='whereby'/>
    </div>
    
</div>
<div className='header-right'>
    <ul className='header-list'>
        {headerData && headerData.map((item)=>
         <li className='header-list-item' key={item?.id}>{item?.list} {item?.icon && <span> &nbsp; {item?.icon}</span>}</li> 
    
         
        )}
       
    </ul>
</div>
    </HeaderContainer>
  )
}

export default Header