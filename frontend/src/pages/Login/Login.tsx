import { useMutation } from "@tanstack/react-query";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/posts";

const Login = () => {
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn({ password });
  };

  const { mutate: signIn, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/manage/resources");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <div className="material-form-container">
      <form className="material-form" onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
        <div className="input-field">
          <span className="bar"></span>
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
          />

          <span className="bar"></span>
          {isError && <p style={{ color: "red", marginTop: "1rem" }}>errore</p>}
        </div>
        <button
          className="main-button"
          type="submit"
          onClick={() => signIn({ password })}
          onKeyDown={(e) => e.key === "Enter" && signIn({ password })}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
