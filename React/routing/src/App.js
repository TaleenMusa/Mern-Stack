import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NumberOfPages from './components/NumberOfPages';
import Hello from './components/Hello';
import Color from './components/Color';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/:number" element={<NumberOfPages />} /> */}
          <Route path="/:hello" element={<Hello />} />
          <Route path="/:word/:color/:backgroundColor" element={<Color />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;