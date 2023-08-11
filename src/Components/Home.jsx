import React from 'react'
import './Home.css'
import {Header} from './Header'
import { IconContext } from "react-icons";
import { BsChevronDoubleDown } from "react-icons/bs";
const Home = () => {
  return (
    <div className="home-container">
        <Header />
        <div className="content">
            <div className="left-content">
                <p>Hello, I'm </p>
                <h1>Raghul Sundaram</h1>
                <p>FrontEnd Developer & UI/UX Designer</p>
                <div>
                <IconContext.Provider value={{className:'downIcon', size : "4em" }}>
                    <div>
                        <BsChevronDoubleDown />
                    </div>
                </IconContext.Provider>
                
                </div>
                
            
            </div>
            <div className="right-content">
                <p>❝</p>
                <img src={require('../assets/myphoto.jpg')} alt=' '/>
                <span>❝</span>
            </div>
        </div>
    </div>
  );
}

export default Home