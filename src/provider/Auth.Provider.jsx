import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

// eslint-disable-next-line react/prop-types
export default function AuthenticationProvider({ children }) {
  const { currentUser } = useAuth();
  const route = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      route("/login");
    }
  }, [currentUser, route]);
  return currentUser && children;
}
