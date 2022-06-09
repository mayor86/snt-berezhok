//import logo from '../images/logo.svg';
import './App.css';
import Header from './Header';
import Info from './Info';
import Login from './Login';
import Footer from './Footer';
import { Route } from 'react-router-dom';
import Invoice from './Invoice';

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/invoice">
        <Invoice />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
