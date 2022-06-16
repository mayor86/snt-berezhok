//import logo from '../images/logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import Info from './Info';
import Login from './Login';
import Footer from './Footer';
import { Route, Redirect, Switch } from 'react-router-dom';
import Invoice from './Invoice';
import ProtectedRoute from "./ProtectedRoute";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.tokenCheck = this.tokenCheck.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    // настало время проверить токен
      this.tokenCheck();
    };

  handleLogin(){
    console.log('qwerty App.js')
      this.setState({
        loggedIn: true
    })
  };
  
  tokenCheck() {
    if (localStorage.getItem('jwt')){   
      console.log('Проверка jwt в App.js');
    }
     else {
      console.log('Нет jwt в App.js');
    }
  }

  render() {
    return (
      <Switch>
        <div className="App">
          <Header />
          <Info />
          <Route path="/">
            {this.state.loggedIn ? <Redirect to="/invoice" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {this.state.loggedIn ? <Redirect to="/invoice" /> : <Login handleLogin={this.handleLogin} />}
          </Route>
          <ProtectedRoute
            path="/invoice"
            loggedIn={this.state.loggedIn}
            component={Invoice}
          />
          <Footer />
        </div>
      </Switch>
    );
    }
}

export default App;
