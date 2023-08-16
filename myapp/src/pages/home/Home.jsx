import React from 'react'
import styled from 'styled-components'
import HomeSlider from './HomeSlider'
import HomeTextBar from './HomeTextBar'
import HomeActive from './HomeActive'
import HomeImageGal from './HomeImageGal'
import HomeGallery from './HomeGallery'
import About from './About'
import HomeFooter from './HomeFooter'


export const HomeContainer=styled.main`
width:100%;
padding:6% 0;
padding-bottom:0;
background-color:#77a577;
`

function Home() {
  return (
    <HomeContainer>
        <HomeSlider/>
        <HomeTextBar/>
        <HomeActive/>
        <HomeImageGal/>
        <HomeGallery/>
        <About/>
        <HomeFooter/>
    </HomeContainer>
  )
}

export default Home