import { useSelector } from "react-redux";

export default function useAuth() {
  const currentUser = useSelector((state) => state?.auth?.user);
  const token = useSelector((state) => state?.auth?.token);
  return { currentUser, token };
}
