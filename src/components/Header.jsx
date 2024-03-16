import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function Header() {
  const { currentUser } = useAuth();
  return (
    <main className=" shadow-sm">
      <nav className=" container mx-auto flex justify-between items-center h-[70px]">
        <Link to={"/"}>
          <h1 className=" text-xl font-semibold">FM</h1>
        </Link>
        <ul className=" flex items-center gap-5">
          <li>
            <NavLink to={"/posts"}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </li>
        </ul>
        <div className=" flex items-center gap-5">
          {currentUser ? (
            <Link to={"/profile"}>
              <Button size="md">Profile</Button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <Button size="md">Login</Button>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
