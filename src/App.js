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
import UserOrderPage from './Pages/UserOrderPage';
import UserProfilePage from './Pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/Components/Logout';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/Components/ProtectedAdmin';
import AdminHome from './Pages/Admin Pages/AdminHome';
import AdminParticularPublicationPage from './Pages/Admin Pages/AdminParticularPublicationPage';
import AdminByClassPage from './Pages/Admin Pages/AdminByClassPage';
import AdminProductetailsPage from './Pages/Admin Pages/AdminProductetailsPage';
import AdminProductFormPage from './Pages/Admin Pages/AdminProductFormPage';
import Bag from './features/bag/component/Bag';

function App() {
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch()
  useEffect(() => {
    if (user) {
      dispatch(fetchItemByUserIdAsync(user))
      dispatch(fetchLoggedInUserAsync(user?.data?.id))
    }
  }, [dispatch, user])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Protected><Home /></Protected>} />
          <Route path="/admin" exact element={<ProtectedAdmin><AdminHome /></ProtectedAdmin>} />
          <Route path="signup" exact element={<SignUpPage />} />
          <Route path="cart" exact element={<Protected><CartPage /></Protected>} />
          <Route path="login" exact element={<LoginPage />} />
          <Route path="/order-success/:id" exact element={<OrderSuccessPage/>} />

          <Route path="publishers/:publisherName/:id" exact element={<Protected><ParticularPublicationPage /></Protected>} />
          <Route path="/admin/publishers/:publisherName/:id" exact element={<ProtectedAdmin><AdminParticularPublicationPage /></ProtectedAdmin>} />

          <Route path="checkout" exact element={<Protected><CheckOutPage /></Protected>} />
          <Route path="/class-category/:publisherName/:id/:subjectName" exact element={<Protected><ByClassPage /></Protected>} />
          <Route path="/admin/class-category/:publisherName/:id/:subjectName" exact element={<ProtectedAdmin><AdminByClassPage /></ProtectedAdmin>} />

          <Route path="/product-details/:publisherName/:id/:subjectName/:className" exact element={<Protected><ProductetailsPage /></Protected>} />
          <Route path="/product-details/:publisherName/:id/:subjectName/:className" exact element={<ProtectedAdmin><AdminProductetailsPage /></ProtectedAdmin>} />

          <Route path="/orders" exact element={<Protected><UserOrderPage /></Protected>} />
          <Route path="/profile" exact element={<Protected><UserProfilePage/></Protected>} />
          <Route path="/logout" exact element={<Logout/>} />
          <Route path="/admin/product-form" exact element={<AdminProductFormPage />} />
          <Route path="/forgot-password" exact element={<ForgotPasswordPage/>} />
          <Route path="/bag" exact element={<Bag />} />
          <Route path="*"  element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
