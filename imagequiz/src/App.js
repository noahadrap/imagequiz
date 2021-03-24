import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Quiz1 from './components/quiz1';
import Quiz2 from './components/quiz2';
import Quiz3 from './components/quiz3';
import Quiz4 from './components/quiz4';
import Quiz5 from './components/quiz5';
import Quiz6 from './components/quiz6';
import Quiz7 from './components/quiz7';
import Quiz8 from './components/quiz8';
import Quiz9 from './components/quiz9';
import Quiz10 from './components/quiz10';
import Quiz11 from './components/quiz11';
import Quiz12 from './components/quiz12';

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
        <Route path="/quiz1" component={Quiz1}/>
        <Route path="/quiz2" component={Quiz2}/>
        <Route path="/quiz3" component={Quiz3}/>
        <Route path="/quiz4" component={Quiz4}/>
        <Route path="/quiz5" component={Quiz5}/>
        <Route path="/quiz6" component={Quiz6}/>
        <Route path="/quiz7" component={Quiz7}/>
        <Route path="/quiz8" component={Quiz8}/>
        <Route path="/quiz9" component={Quiz9}/>
        <Route path="/quiz10" component={Quiz10}/>
        <Route path="/quiz11" component={Quiz11}/>
        <Route path="/quiz12" component={Quiz12}/>
      </Switch>
      <Footer />
      </Container>
    </HashRouter>
    );
  };
  export default App;
