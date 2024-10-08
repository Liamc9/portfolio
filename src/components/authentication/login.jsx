import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate, Link } from "react-router-dom";
import Input from "../input";

const LoginPage = ({ themeColor = "purple-500" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setResetEmailSent(false);
    setIsLoading(true);

    try {
      const persistenceType = rememberMe
        ? browserLocalPersistence
        : browserSessionPersistence;
      await setPersistence(auth, persistenceType);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (userCredential.user.emailVerified) {
        navigate("/");
      } else {
        await auth.signOut();
        setError("Your email is not verified. Please verify your email before logging in.");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address.");
      setResetEmailSent(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
      setError("");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email address.");
      } else {
        setError("Failed to send password reset email. Please try again.");
      }
      setResetEmailSent(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-2">
      <div className="w-full max-w-md rounded-lg border bg-white p-6 px-4 shadow-md sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Sign in to your account
        </h2>
        {resetEmailSent && (
          <p className={`mt-2 text-center text-sm text-green-500`}>
            A password reset email has been sent to {email}.
          </p>
        )}
        {error && (
          <p className="mt-2 text-center text-sm text-red-500">{error}</p>
        )}
        <form className="mt-4 space-y-4" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <Input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            colour={themeColor}
            htmlFor="email"
            label="Email"
          />
          <Input
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            colour={themeColor}
            htmlFor="password"
            label="Password"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-500"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900 sm:text-base"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm sm:text-base">
              <button
                type="button"
                onClick={handleForgotPassword}
                className={`font-medium text-${themeColor} hover:text-${themeColor}`}
              >
                Forgot your password?
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`group relative flex w-full justify-center rounded-md border border-transparent bg-${themeColor} px-4 py-2 text-sm font-medium text-white hover:bg-${themeColor}-700 focus:outline-none focus:ring-2 focus:ring-${themeColor} focus:ring-offset-2 sm:text-base`}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className={`font-medium text-${themeColor} hover:text-${themeColor}`}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
