import React from'react';
import './App.css';
import { BrowserRouter as Router, Routes} from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        {/* <Route path='/' exact>
          <About />
        </Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
