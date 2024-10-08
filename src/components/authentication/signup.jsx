import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Input from "./input";

const SignupPage = ({ themeColor = "purple-500" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Create a new user with email and password
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== reenterPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username,
      });
      await sendEmailVerification(user);

      // Additional user data including username
      const userData = {
        email,
        username,
        chef: false,
      };
      await setDoc(doc(db, "users", user.uid), userData);
      await signOut(auth);
      console.log("User created and signed out successfully");
      setIsSignupComplete(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  if (isSignupComplete) {
    return (
      <div className="flex min-h-screen items-center justify-center px-2">
        <div className="w-full max-w-md rounded-lg border bg-white p-6 px-4 shadow-md sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900">
            Signup Successful!
          </h2>
          <p>
            Please check your email <strong>{email}</strong> for a verification
            link to activate your account.
          </p>
          <p className="mt-4">
            <Link
              to="/login"
              className={`font-medium text-${themeColor} hover:text-${themeColor}`}
            >
              Return to Login
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 flex min-h-screen items-center justify-center px-2 pb-10">
      <div className="mt-10 w-full max-w-md rounded-lg border bg-white p-6 pt-4 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Sign up for an account
        </h2>
        {error && (
          <p className="mb-2 text-center text-sm text-red-500">{error}</p>
        )}
        <form onSubmit={handleSignup}>
          <div className="space-y-3">
            <Input
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              colour={themeColor}
              label="Username"
            />
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              colour={themeColor}
              label="Email"
            />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              colour={themeColor}
              label="Password"
            />
            <Input
              name="reenterPassword"
              type="password"
              value={reenterPassword}
              onChange={(e) => setReenterPassword(e.target.value)}
              colour={themeColor}
              label="Re-enter Password"
            />
            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox cursor-pointer h-4 w-4"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                />
                <span className="ml-2 text-xs">
                  I accept the{" "}
                  <Link
                    to="/terms"
                    className={`text-${themeColor} hover:text-${themeColor}`}
                  >
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className={`text-${themeColor} hover:text-${themeColor}`}
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-${themeColor} hover:bg-${themeColor}-700 group relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-${themeColor} focus:ring-offset-2`}
            >
              {isLoading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="mr-2 animate-spin" />{" "}
                  Signing up...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className={`font-medium text-${themeColor} hover:text-${themeColor}`}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
