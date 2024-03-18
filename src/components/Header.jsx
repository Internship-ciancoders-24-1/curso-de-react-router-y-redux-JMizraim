import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { gravatar } from "../utils/gravatar";
import { logoutRequest } from "../actions";
import classNames from "classnames";
import { connect } from "react-redux";

const Header = (props) => {
  const { isLogin, isRegister } = props;
  const user = props.user || {};
  const hasUser = Object.keys(user).length > 0;

  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="User" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && (
            <li>
              <Link to="/">{user.name}</Link>
            </li>
          )}
          {hasUser ? (
            <li>
              <a to="#logout" onClick={handleLogout}>
                Cerrar sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
