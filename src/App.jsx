
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Post from './components/Post';
import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom';
import Home from './pages/Home'
import Create from './pages/Create'
import Read from './pages/Read'
import Unavailable from './pages/Unavailable';



function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Create' element= {<Create/>}></Route>
        <Route path='/read/:id' element= {<Read/>}></Route>
        <Route path='/Unavailable' element= {<Unavailable/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
