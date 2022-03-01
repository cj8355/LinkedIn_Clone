import Login from './components/Login';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}>
        
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
