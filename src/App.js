
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
      <Route exact path="/flashcardweb" Component={Home} />
      <Route exact path="/flashcardweb/about" Component={About} />
    </Routes>
   </Router>
  );
}

export default App;
