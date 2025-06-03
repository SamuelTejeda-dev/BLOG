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

  const {
    mutate: signIn,
    isError,
    isPending,
  } = useMutation({
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
        <h2>Login</h2>
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
          {isError && <p className="error">You are not authorized!</p>}
        </div>
        <button
          disabled={isPending}
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
