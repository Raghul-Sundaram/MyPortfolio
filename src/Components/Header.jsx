import React from 'react'
import './Header.css'
import { AiOutlineMenu } from "react-icons/ai";
export const Header = () => {
  const handleClick = () => {
       if( document.querySelector('.links-div-sm').hasAttribute("style","display:flex")){
        document.querySelector('.links-div-sm').setAttribute("style","display:none")
       }
       else{
        document.querySelector('.links-div-sm').setAttribute("style","display:flex")
       }
  }
  
  return (
    <header className='header'>
           <div className='logo-div'>
           Sᴚ
           </div>
           <div className='links-div'>
                <a href='https://www.hackerrank.com/sraghul550' target='_blank' rel='noreferrer'>HackerRank</a>
                <a href='https://www.linkedin.com/in/srag-hul/' target='_blank' rel='noreferrer'>LinkedIn</a>
                <a href='https://github.com/Raghul-Sundaram' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://leetcode.com/Raghul550/' target='_blank' rel='noreferrer'>Leetcode</a>
           </div>
           <div className='menuIcon' onClick={handleClick}>
              <AiOutlineMenu />
           </div>
           <div className='links-div-sm'>
                <a href='https://www.hackerrank.com/sraghul550' target='_blank' rel='noreferrer'>HackerRank</a>
                <a href='https://www.linkedin.com/in/srag-hul/' target='_blank' rel='noreferrer'>LinkedIn</a>
                <a href='https://github.com/Raghul-Sundaram' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://leetcode.com/Raghul550/' target='_blank' rel='noreferrer'>Leetcode</a>
           </div>
    </header>
  )
}
