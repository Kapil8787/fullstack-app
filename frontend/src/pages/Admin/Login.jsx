import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // ✅ SAVE TOKEN (THIS WAS MISSING)
      localStorage.setItem("adminToken", res.data.token);

      // ✅ REDIRECT AFTER LOGIN
      navigate("/admin");
    } catch {
      alert("Invalid login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
