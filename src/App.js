
import './App.css';
import Home from './components/Home';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
   <Router> 
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/about" Component={About} />
    </Routes>
   </Router>
  );
}

export default App;
