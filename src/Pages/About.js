import React from 'react'
import './pagesCss/about.css'
export const About = () => {
  return (
    <div className='About'>
      <div className=' card__section'>
        <div className='About__first'>
          <h1>About Me</h1><br /><br />
          <p>Frontend developer having expertise in frontend development and highly motivated individual dedicated to writing clear, concise, robust code that works. I like creating products that either have fun and nifty features or solve a genuine problem for people.</p>
        </div>
        <section className='akp__card'>
        <a href="https://app.daily.dev/akp_108"><img src="https://api.daily.dev/devcards/727ac016bc264f9683b5c3c33e32187c.png?r=b71" width="200" alt="Atul Kumar Pandey's Dev Card"/></a>
        </section>
        </div>
          <div className='About__second'>
        <h1>Education</h1>
          <section className='stack'>
            <p>Full Stack Developer Bootcamp</p>
            <p>feb 2022 - present day</p>
          </section>
          <section className='prep'>
            <p>Prepbyetes</p> <p>Online</p>
          </section><br />
          <hr />
          <section className='stack'>
            <p>Bachelor in Electronics & Communication</p>
            <p>2017 - 2021</p>
          </section>
          <section className='prep'>
            <p>Institute of Technology and managenet</p> <p>Maharajganj</p>
          </section>
        </div>
    </div>
  )
}
