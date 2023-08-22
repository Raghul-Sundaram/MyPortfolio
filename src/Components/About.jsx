import React from 'react'
import './About.css'
import Button from "./Button.jsx"
const About = () => {
  return (
    <section id='about-conatainer'>
        <h1>About Me</h1>
        <br></br>
        <p>Hello everyone!! I am S.Raghul, and currently doing my bachelor degree in computer science at VSB Engineering college karur.
        I am interested in Web development and Blockchain Development and 
        I am currently working as a intern at lucid Imaging in Software Development Domain.</p>
        <br></br>
        <br></br>
        <Button text="Download CV" link="https://drive.google.com/file/d/11Lo3FA_fZ2UE3GEwlkzqLeOqHbYZW7e_/view?usp=sharing" />
    </section>
  )
}

export default About
