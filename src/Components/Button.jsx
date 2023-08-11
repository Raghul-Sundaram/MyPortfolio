import './Button.css'

const Button = ({text}) => {
    return(
       <div>
         <button className='button'>
          <a href='https://www.youtube.com/watch?v=LqDCuqV9BaY&t=872s'  target='_blank' rel='noreferrer'>{text}</a>
         </button>
       </div>
    );
}
export default Button