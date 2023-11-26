import './App.css';
import Navbar from './Componets/Pages/Navbar';
import Contact from './Componets/Pages/Contact';
import Home from './Componets/Pages/Home';
import Playlist from './Componets/Pages/Playlist';
import ContextApi from './ContextApi';

function App() {
  return (
    <ContextApi>
    <Navbar/>
    <Playlist/>
    {/* <Contact/> */}
    
    </ContextApi>
  );
}

export default App;
