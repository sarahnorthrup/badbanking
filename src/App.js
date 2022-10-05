import './App.css';
import React from 'react'
import {
  Card,
  Accordion,
  Button,
  Container,
  Row,
  Col,
  Image,
  Input,
} from "react-bootstrap";
function App(){
  return (
    <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />   
    </Col> 
  );  
};

export default App;
