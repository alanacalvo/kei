import './App.scss';
import bgImg from './images/bgImg.jpeg';
import Home from './Views/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './Views/About/About'
import Gallery from './Views/Gallery/Gallery'
import Contact from './Views/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="background">

      <div className="App">
          <Navbar />

        <div className="bgImgWrapper">
          <img className='bgImg' src={bgImg} />
          <div className='bgContent'>
          <Routes>

            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
