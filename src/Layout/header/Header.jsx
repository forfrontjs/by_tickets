import React from 'react'
import './header.scss'
import Logo from './img/tsum_logo.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    const user = localStorage.getItem("user")
    const checkUser = JSON.parse(user)

  
    
  return (
    <div className="header">
      <div className="header__main container">
        <div className="header__logo">
          <img
            className="header__logo-image"
            src={Logo}
            alt="logo"
            onClick={() => navigate("")}
          />
        </div>
        <div className="header__right">
          <Link className="header__link" to="/">
            Сеансы
          </Link>
          <Link className="header__link" to="#">
            Афиша
          </Link>
          <Link className="header__link" to="/contact">
            О нас
          </Link>
          <a href="" className="header__link">
            0500 000 005
          </a>
          {!checkUser ? (
            <Link className="header__link" to="/login">
              Войти
            </Link>
          ) : (
            <Link
              className="header__link"
              to="/"
              onClick={() => localStorage.removeItem("user")}
            >
              Выйти
            </Link>
          )}
        </div>
        {/* ====== Start BURGER ========= */}
        <div className="header__hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="header__menu-btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="header__menu-box">
            <li>
              <Link className="header__menu__item" to="/login">
                Войти
              </Link>
            </li>
            <li>
              <Link className="header__menu__item" to="#">
                Сеансы
              </Link>
            </li>
            <li>
              <Link className="header__menu__item" to="#">
                Афиша
              </Link>
            </li>
            <li>
              <Link className="header__menu__item" to="/contact">
                О нас
              </Link>
            </li>
            <li>
              <Link className="header__menu__item" to="#">
                0500 000 005
              </Link>
            </li>
          </ul>
        </div>
        {/* ========= End Burger =========== */}
      </div>
    </div>
  );
}

export default Header
