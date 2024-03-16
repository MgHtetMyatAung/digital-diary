import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
export default function UserProtectProvider({ children }) {
  const { currentUser } = useAuth();
  const route = useNavigate();
  useEffect(() => {
    if (currentUser) {
      route("/");
    }
  }, [currentUser, route]);
  return !currentUser && children;
}
