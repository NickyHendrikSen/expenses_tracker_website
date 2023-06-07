import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BarChart from './components/charts/BarChart';
import Form from './components/form/Form';

const App = () => {

  return (
    <div className="App">
      <Form />
      <BarChart />
    
    </div>
  );
}

export default App;
