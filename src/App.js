import React from 'react';
import './style.css';
import './App.css';
import Sidebar from './components/Sidebar';
import CreateAd from './CreateAd';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="row">
      <div className="col-1">
      <Sidebar/>
      </div>
      <div className="col-md-10"></div>
      <CreateAd/>
      </div>
      </div>
  );
}

export default App;
