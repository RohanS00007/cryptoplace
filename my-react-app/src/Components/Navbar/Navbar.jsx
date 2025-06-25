import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../Context/CoinContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
    }
  };

  const featureToast = () => toast.info("This feature will be implemented soon!");

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt="" className='logo' />
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <li onClick={featureToast}>Features</li>
        <li onClick={featureToast}>Pricing</li>
        <li onClick={featureToast}>Blog</li>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button onClick={featureToast}>
          Sign up <img src={arrow_icon} alt="" />
        </button>
      </div>

      {/* Toast container for rendering the toasts */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Navbar;
