import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your account and continue your journey.</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <span
                className="password-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember Me
            </label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="register-text">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;