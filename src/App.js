import './App.scss';
import Home from './Views/Home/Home';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className='sections'>
      <Home />
    
      </div>

    </div>
  );
}

export default App;
