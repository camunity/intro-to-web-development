import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import PadInput from './components/PadInput';
import DesignPad from './components/DesignPad'
import EditBtn from './components/EditBtn'
import { Container, Button } from 'react-bootstrap'

// test
function App() {
  return (
    <div className="container">  
          <PadInput />
          <DesignPad />
          <div>
            <EditBtn/>
          </div>
    </div>
  );
}

export default (App);
