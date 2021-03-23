import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";

function App() {

  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  let onLoggedIn = (email) => {
    localStorage.setItem('username', email);
    setUsername(email);
  }
  return (
    <HashRouter>
      <Container fluid>
      <Header />
      <NavigationBar username={username}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login">
        <Login onLoggedIn= {onLoggedIn} />
        </Route>
      </Switch>
      <Footer />
      </Container>
    </HashRouter>
    );
  };
  export default App;
