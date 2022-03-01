import Login from './components/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/home" element={<><Home/> <Header/></>}></Route>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
