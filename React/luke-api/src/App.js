import './App.css';
import { Routes, Route } from 'react-router-dom';
import People from './components/People';
import Planet from './components/Planet';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
