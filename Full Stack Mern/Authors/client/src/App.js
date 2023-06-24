import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Edit from './views/Edit';
import New from './views/New';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new" element={<New />} />
          <Route path="/author/:id/edit" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
