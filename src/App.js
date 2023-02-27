import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './Pages/ProjectDisplay';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />}/>
        <Route exact path='/project/:id' element={<ProjectDisplay />} />
        <Route exact path='/experience' element={<Experience/>}/>
         </Routes>
        <Footer />
        </Router>
      
    </div>
  );
}

export default App;
