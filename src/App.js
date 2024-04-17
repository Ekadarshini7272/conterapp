import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Counter from './component/counter';
function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Counter />} />
        </Routes>
    </Router>
  )
}
export default App;