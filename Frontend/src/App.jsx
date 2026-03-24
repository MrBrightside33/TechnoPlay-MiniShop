import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from './Loginpage/Loginpage';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Signup  from './Loginpage/Signup';
import Forget from './Loginpage/Forget';
import Authentication from './Loginpage/Authentication';
import Changepass from './Loginpage/Changepass';
import Account from './Accounts/Accounts';
import Explore from './Explore/Explore';
import Order from './Order/Order';
import Cart from './Cart/Cart';
import Contacts from './Contact/Contact';


const App = () => {
  const[] = React.useState('');
  return (
    <>
    <div>
    <Router>
      <Routes>
        <Route path="/login" element={<><Header /><Loginpage /></>} /> 
        <Route path="/home" element={<Homepage />} />
        <Route path="/signup" element={<><Header /><Signup /></>} />
        <Route path="/forgot" element={<><Header /><Forget /></>} />
        <Route path="/authentication" element={<><Header /><Authentication /></>} />
        <Route path="/change" element={<><Header /><Changepass /></>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contacts/>} /> 
      </Routes>
    </Router>
    </div>
      
    </>
  )
}

export default App