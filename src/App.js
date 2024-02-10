import React from 'react';
import logo from './logo.svg';
import './App.css';
import Array from './Array';
import Table from './Components/Table';
import SideBar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Counter from './Components/Counter';
import UseReducer from './Components/UseReducer';
import State from './Components/State';
import UseContext from './Components/UseContext';
import UseContextReact from './Components/UseContextReact';
import NoRender from './Components/NoRender';
import DomAccess from './Components/DomAccess';
import Previous from './Components/Previous';
import CrudReducer from './Components/CrudReducer';
import CrudOperation from './Components/CrudOperation';

function App() {
  return (
    <div className="container">
{/* <CrudOperation /> */}
      {/* <CrudReducer /> */}
       <Array />
      {/* <Table />  */}
    
      {/* <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </Router> */}
      {/* <Counter />
      <UseReducer />
      <State />
      <UseContext />
      <UseContextReact />
      <NoRender />
      <DomAccess />
      <Previous /> */}
    </div>
  ); 
}

export default App;
