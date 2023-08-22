import './Button.css'

const Button = ({text,link}) => {
    return(
       <div>
         <button className='button'>
          <a href={link}  target='_blank' rel='noreferrer'>{text}</a>
         </button>
       </div>
    );
}
export default Button
