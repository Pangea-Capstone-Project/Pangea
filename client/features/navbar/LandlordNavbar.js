import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import './landlordnavbar.css'
import AuthForm from '../auth/AuthForm';

const LandlordNavbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1 id='title'>Welcome to Pangea</h1>
      <nav>
        {isLoggedIn ? (
          <div id='navDiv'>
            {/* The navbar will show these links after you log in */}
            <Link className='navLinks' to="/home">Home</Link>
            <Link className='navLinks' to="/tenant">Tenants</Link>
            <Link className='navLinks' to="/workorders">Work Orders</Link>
            <Link className='navLinks' to="/pastdue">Past Due Payments</Link>
            <Link className='navLinks' to="/chat">Chat</Link>
            <button id='logoutBtn' type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <div id='loginBtns'>
            <button className='landtenBtns'>Landlords</button>
            <button className='landtenBtns'>Tenants</button>
            </div>
            {/* <AuthForm name="login" displayName="Login"/> */}
            <div id='loginDiv'>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default LandlordNavbar;
