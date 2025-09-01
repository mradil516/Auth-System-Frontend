import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- if using React Router
import api from "../api/axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      api
        .get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => alert("Failed to load profile"));
    }
  }, [token]);

  if (!user) {
    return <div className="container mt-5">Loading profile...</div>;
  }

  // Handle click
  const handleUserClick = () => {
    // Show alert with details
    alert(`User: ${user.name}\nEmail: ${user.email}\nRole: ${user.role}`);

   
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "500px", width: "100%", cursor: "pointer" }}
        onClick={handleUserClick} 
      >
        <div className="text-center">
          {/* Avatar circle */}
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto"
            style={{ width: "100px", height: "100px", fontSize: "2rem" }}
          >
            {user.name.charAt(0).toUpperCase()}
          </div>

          {/* Name + Email */}
          <h3 className="mt-3">{user.name}</h3>
          <p className="text-muted">{user.email}</p>

          {/* Role badge */}
          <span
            className={`badge ${
              user.role === "admin" ? "bg-danger" : "bg-secondary"
            } px-3 py-2`}
          >
            {user.role.toUpperCase()}
          </span>
        </div>

        <hr />

        {/* Details section */}
        <div>
          <p><strong>User ID:</strong> {user.id}</p>
          <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(user.updated_at).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
