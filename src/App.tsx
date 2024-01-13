import './styles.css'
import React from 'react'
import IMAGE from './ReactImage.png';
import SVG from './undrawSvg.svg'

function App(){
  return (
    <>
    <h1>React JS with Webpack</h1>
    <img src={IMAGE}/>
    <img src={SVG}/>

    </>
  )
}

export default App