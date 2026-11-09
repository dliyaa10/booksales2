/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 350px;
  margin: 50px auto;
  padding: 25px;
  background-color: #faf9f6;
  border-radius: 10px;
`;

const inputStyle = css`
  padding: 10px;
  border: 1px solid #a9bdd0;
  border-radius: 5px;
  width: 100%;
`;

const buttonStyle = css`
  padding: 10px;
  background-color: #40566b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #657c91;
  }
`;

function LoginForm() {
  return (
    <form css={formStyle}>
      <h2>Login</h2>

      <input
        css={inputStyle}
        type="text"
        placeholder="Username"
      />

      <input
        css={inputStyle}
        type="email"
        placeholder="Email"
      />

      <input
        css={inputStyle}
        type="password"
        placeholder="Password"
      />

      <button css={buttonStyle} type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;