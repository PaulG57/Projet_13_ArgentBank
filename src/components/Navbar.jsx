import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useGetUserProfileQuery } from "../redux/authApi";
import logo from "../assets/argentBankLogo.png";
import "../styles/navbar.css";

const Navbar = () => {
  // Récupère le token et l'état d'authentification depuis le store Redux
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  // Appelle l'endpoint pour récupérer le profil, skip si pas de token
  const { data: profileData } = useGetUserProfileQuery(token, { skip: !token });

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>{" "}
              {profileData?.body?.firstName || "User"}
            </Link>
            <Link className="main-nav-item" to="/" onClick={() => dispatch(logout())}>
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;