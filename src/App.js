import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
