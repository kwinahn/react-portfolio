import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      
      <Work></Work>
      
      <Contact></Contact>
    </div>
  );
}

export default App;