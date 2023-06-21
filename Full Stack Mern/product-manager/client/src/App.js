import './App.css';
import Main from './views/Main';
import React from 'react';
import Details from './views/Details';
import { Route, Routes,  BrowserRouter} from 'react-router-dom';
import Update from './views/Update';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/Details/:id" element={<Details />} />
      <Route exact element={<Update />} path="/products/:id/edit" />

      </Routes>
      
  
    </div>
    </BrowserRouter>
  );
}

export default App;