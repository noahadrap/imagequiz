import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Quiz from './components/quiz1';
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
import Quiz13 from './components/quiz13';
import Quiz14 from './components/quiz14';
import Quiz15 from './components/quiz15';
import Quiz16 from './components/quiz16';
import Quiz17 from './components/quiz17';
import Quiz18 from './components/quiz18';
import Quiz19 from './components/quiz19';
import Quiz20 from './components/quiz20';
import Quiz21 from './components/quiz21';
import Quiz22 from './components/quiz22';
import Quiz23 from './components/quiz23';
import Quiz24 from './components/quiz24';
import Quiz25 from './components/quiz25';
import Quiz26 from './components/quiz26';
import Quiz27 from './components/quiz27';

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
        <Route exact path="/" component={Home}>
          <Home />
          </Route>
        <Route path="/login">
        <Login onLoggedIn= {onLoggedIn} />
        </Route>
        <Route path="/quiz" component={Quiz}/>
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
        <Route path="/quiz13" component={Quiz13}/>
        <Route path="/quiz14" component={Quiz14}/>
        <Route path="/quiz15" component={Quiz15}/>
        <Route path="/quiz16" component={Quiz16}/>
        <Route path="/quiz17" component={Quiz17}/>
        <Route path="/quiz18" component={Quiz18}/>
        <Route path="/quiz19" component={Quiz19}/>
        <Route path="/quiz20" component={Quiz20}/>
        <Route path="/quiz21" component={Quiz21}/>
        <Route path="/quiz22" component={Quiz22}/>
        <Route path="/quiz23" component={Quiz23}/>
        <Route path="/quiz24" component={Quiz24}/>
        <Route path="/quiz25" component={Quiz25}/>
        <Route path="/quiz26" component={Quiz26}/>
        <Route path="/quiz27" component={Quiz27}/>
      </Switch>
      <Footer />
      </Container>
    </HashRouter>
    );
  };
  export default App;
