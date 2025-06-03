// src/auth/useGoogleAuth.js
import {jwtDecode} from "jwt-decode";
import { useAuth } from "./AuthContext";

export function useGoogleAuth() {
  const { login } = useAuth();

  const handleSuccess = (res) => {
    const decoded = jwtDecode(res.credential);
    login({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    });
  };

  const handleError = () => {
    console.error("Google Login Failed");
  };

  return { handleSuccess, handleError };
}
