import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Components/Header/Header';
import Background from './Components/Background/Background';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Foods from './Components/Foods/Foods';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Footer from './Components/Footer/Footer';

export const CartContext = createContext();
export const UserContext = createContext();

function App() {

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({

    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    message: '',

  })

  return (


    <CartContext.Provider value={[cart, setCart]}>
      <UserContext.Provider value={[user, setUser]}>
      <Router>
      <Header></Header>
      <Switch>
        <Route path="/">
          <Background></Background>
          <Foods></Foods>
          <ChooseUs></ChooseUs>
          <Footer></Footer>

        </Route>
      </Switch>



      </Router>
      </UserContext.Provider>
      </CartContext.Provider>
      
      

      
  );
}

export default App;
