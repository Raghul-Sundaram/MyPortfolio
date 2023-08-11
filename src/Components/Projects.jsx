import React from 'react'
import './Projects.css'
const Projects = () => {
  const showUiProjects = () => {
        document.querySelector('.ui-project').classList.add('active');
        document.querySelector('.web-project').classList.remove('active');
        document.querySelector('.cpp-project').classList.remove('active');
  }
  const showWebProjects = () => {
        document.querySelector('.web-project').classList.add('active');
        document.querySelector('.ui-project').classList.remove('active');
        document.querySelector('.cpp-project').classList.remove('active');
}
const showCppProjects = () => {
        document.querySelector('.cpp-project').classList.add('active');
        document.querySelector('.ui-project').classList.remove('active');
        document.querySelector('.web-project').classList.remove('active');
}
  return (
    <div className='project-container'>
        <h1>My Projects :</h1>
        <div className='project-left'>
                <div onClick={showWebProjects} className='box box-one'>
                    <p>Web Development Projects</p>
                </div>
                <div onClick={showCppProjects} className='box box-two'>
                    <p>C++ Projects</p>
                </div>
                <div onClick={showUiProjects} className='box box-three'>
                    <p>UI/UX Design Projects</p>
                </div>
        </div>
        <div className='project-right'>
              <div className='web-project active'>
                <div className='project'>
                      <img src={require('../assets/calculator.png')} alt=' '/>
                      <p> <a href='https://raghul-calculator.netlify.app/'  target='_blank' rel='noreferrer'>Calculator using Javascript</a>  </p>
                </div>
                <div className='project'>
                      <img src={require('../assets/weather.png')} alt=' '/>
                      <p> <a href='https://raghul-weatherapp.netlify.app/'  target='_blank' rel='noreferrer'>Weather App using Javascript</a>  </p>
                </div>
                <div className='project'>
                      <img src={require('../assets/restaurent.png')} alt=' '/>
                      <p> <a href='https://raghul-weatherapp.netlify.app/'  target='_blank' rel='noreferrer'>Restaurent Website using React JS</a>  </p>
                </div>
              </div>
              <div className='ui-project'>
                <div className='project'>
                      <img src={require('../assets/newsui.png')} alt=' '/>
                      <p> <a href='https://www.figma.com/proto/00FfGYYBWZxNSS0cMe0Zwo/Untitled?type=design&node-id=1-2&t=u8UTcp3g81Gmrpky-0&scaling=scale-down&page-id=0%3A1'  target='_blank' rel='noreferrer'>News App UI</a>  </p>
                </div>
                <div className='project'>
                      <img src={require('../assets/socialui.png')} alt=' '/>
                      <p> <a href='https://www.figma.com/proto/Mfhi6UWqCEvo5c5RpRNdFL/Untitled?type=design&node-id=3-3&t=WdZ6SHCsmX9kVJvN-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A3'  target='_blank' rel='noreferrer'>Social Media App UI</a>  </p>
                </div>
                <div className='project'>
                      <img src={require('../assets/kitchenui.png')} alt=' '/>
                      <p> <a href='https://www.figma.com/proto/jFbmm9BoAThvZY0LGFqcDd/Bobs-Kitchen?type=design&t=WdZ6SHCsmX9kVJvN-0&scaling=min-zoom&page-id=0%3A1&node-id=10-78'  target='_blank' rel='noreferrer'>Restaurent Website UI</a>  </p>
                </div>
              </div>
              <div className='cpp-project'>
                {/* <div className='project'>
                      <img src={require('../assets/calculator.png')} alt=' '/>
                      <p> <a href='https://raghul-calculator.netlify.app/'  target='_blank' rel='noreferrer'>Cpp project</a>  </p>
                </div>
                <div className='project'>
                      <img src={require('../assets/weather.png')} alt=' '/>
                      <p> <a href='https://raghul-weatherapp.netlify.app/'  target='_blank' rel='noreferrer'>Weather App using Javascript</a>  </p>
                </div>
                <div className='project'>
                      <img src={require('../assets/restaurent.png')} alt=' '/>
                      <p> <a href='https://raghul-weatherapp.netlify.app/'  target='_blank' rel='noreferrer'>Restaurent Website using React JS</a>  </p>
                </div> */}
                <h1>Working!...</h1>
              </div>
        </div>
    </div>
  )
}

export default Projects