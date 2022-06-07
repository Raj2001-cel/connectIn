import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';




function App() {

  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path = "/" element={<Login/>} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
