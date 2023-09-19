import React, { useEffect } from 'react';
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
import Protected from './features/auth/Components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemByUserIdAsync } from './features/cart/CartSlice';
import PageNotFound from './Pages/404';
import OrderSuccessPage from './Pages/OrderSuccessPage';

function App() {
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch()
  useEffect(() => {
    if (user) {
      dispatch(fetchItemByUserIdAsync(user))
    }
  }, [dispatch, user])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Protected><Home /></Protected>} />
          <Route path="signup" exact element={<SignUpPage />} />
          <Route path="cart" exact element={<Protected><CartPage /></Protected>} />
          <Route path="login" exact element={<LoginPage />} />
          <Route path="/order-success/:id" exact element={<OrderSuccessPage/>} />
          <Route path="publishers/:publisherName/:id" exact element={<Protected><ParticularPublicationPage /></Protected>} />
          <Route path="checkout" exact element={<Protected><CheckOutPage /></Protected>} />
          <Route path="/class-category/:publisherName/:id/:subjectName" exact element={<Protected><ByClassPage /></Protected>} />
          <Route path="/product-details/:publisherName/:id/:subjectName/:className" exact element={<Protected><ProductetailsPage /></Protected>} />
          <Route path="*"  element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
