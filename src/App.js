import React from 'react';
import Mysurvey from './components/surveyDisplay/surveyone';
import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App">
        <div className='header-container'>
          <Header />
        </div>
        <div className='survey-container'>
          <Mysurvey/>
        </div>
      </main>
    </div>
  );
}

export default App;
