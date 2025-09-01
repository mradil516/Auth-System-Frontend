import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post("/login", { email, password });

    // Save token + role in localStorage
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);

    alert("Login successful!");

    // Redirect based on role
    if (res.data.user.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/profile");
    }
  } catch (err) {
    console.error(err);
    alert("Invalid credentials");
  }
};


  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-2">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
    </div>
  );
}
