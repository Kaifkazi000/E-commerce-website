import React, { useState } from "react";
import "./Login.css"; // ✅ Fixed import

const AuthPage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <div className="form-container">
        {/* Login Form */}
        <div className={`form-box login ${!isActive ? "show" : "hide"}`}>
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p>Don't have an account? <span onClick={() => setIsActive(true)}>Register</span></p>
        </div>

        {/* Register Form */}
        <div className={`form-box register ${isActive ? "show" : "hide"}`}>
          <h2>Register</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="register-btn">Register</button>
          </form>
          <p>Already have an account? <span onClick={() => setIsActive(false)}>Login</span></p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
