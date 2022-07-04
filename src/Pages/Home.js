import React from 'react'
import './pagesCss/Home.css'
import Atul from '../Image/Atul.JPG'
import Akp from '../Image/Atul_Kumar.pdf'
const Home = () => {
  return (
    <div className='Home'>
        <div className='div__left'>
           <section className='first'>
            <h1>HI,</h1>
           <h1>MY NAME</h1> 
              <h1>IS</h1> 
           </section>

            <section className='second'>
            <h1 style={{color:"red"}}>ATUL KUMAR PANDEY</h1>
            <h1>FRONTEND DEVELOPER</h1>
            </section><br /><br />
            <button><a href={Akp} download={Akp}>Download Resume</a></button>
      

        </div>

        <div className='div__rigth'>
              <img src={Atul} alt="error" />
        </div>

    </div>
  )
}

export default Home