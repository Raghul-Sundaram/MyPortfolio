import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div className='skills-container'>
        <h1>Skills:</h1>
        <div className='skills-list'>
            <img src={require('../assets/reactlogo.png')} alt=' ' />
            <img src={require('../assets/cpplogo.png')} alt=' ' />
            <img src={require('../assets/githublogo.png')} alt=' ' />
            <img src={require('../assets/figmalogo.png')} alt=' ' />
            <img src={require('../assets/htmllogo.png')} alt=' ' />
            <img src={require('../assets/csslogo.png')} alt=' ' />
            <img src={require('../assets/jslogo.png')} alt=' ' />
        </div>
    </div>
  )
}

export default Skills