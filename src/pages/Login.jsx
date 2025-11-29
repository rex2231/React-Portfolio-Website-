import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "../components/ThemeToggle";

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("No user registered");
      return;
    }

    const loggedUser = JSON.parse(storedUser);

    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
      return;
    }

    alert("Wrong Email or Password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 transition-colors duration-300">
      <ThemeToggle />
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-card p-6 rounded shadow space-y-4 transition-colors duration-300"
      >
        <h2 className="text-xl font-semibold text-foreground">Login</h2>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="email"
            className="mt-1 border border-border rounded px-3 py-2 w-full bg-card text-foreground focus:outline-none focus:ring focus:ring-primary/50 transition-colors duration-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground">
            Password
          </label>
          <input
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            type="password"
            className="mt-1 border border-border rounded px-3 py-2 w-full bg-card text-foreground focus:outline-none focus:ring focus:ring-primary/50 transition-colors duration-300"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Sign In
        </button>

        <div className="text-sm text-center text-foreground">
          Don't have an account?{" "}
          <a href="/register" className="text-primary underline">
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

