import React from 'react';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import ParticularPublicationPage from './Pages/ParticularPublicationPage';
import CheckOutPage from './Pages/CheckOutPage';
import ByClassPage from './Pages/ByClassPage';
import ProductetailsPage from './Pages/ProductetailsPage';
import Navbar from './features/Navbar/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="signup" exact element={<SignUpPage />} />
          <Route path="cart" exact element={<CartPage />} />
          <Route path="login" exact element={<LoginPage />} />
          <Route path="publishers/:publisherName/:id" exact element={<ParticularPublicationPage />} />
          <Route path="checkout" exact element={<CheckOutPage />} />
          <Route path="/class/:publisherName/:id/:subjectName" exact element={ <ByClassPage />}/>
          <Route path="product-details" exact element={<ProductetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
