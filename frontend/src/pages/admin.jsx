import React, { useState } from "react";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      window.location.href = "/dashboard";
    } else {
      setError("Incorrect Password");
    }
  };

  return (
    <div className="pt-40 px-6 flex justify-center">
      <div className="w-full max-w-sm border p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-orange-600">Admin Login</h1>

        <input
          type="password"
          className="w-full p-3 border rounded-lg mt-6"
          placeholder="Enter Admin Password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-900"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
