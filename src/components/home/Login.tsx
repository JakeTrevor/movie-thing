import { signIn } from "next-auth/react";
import type { FC } from "react";

const Login: FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">You aren&apos;t logged in</h1>
          <div className="divider" />
          <button className="btn-primary btn" onClick={() => void signIn()}>
            Sign in / Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
