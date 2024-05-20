import { Button } from "@material-tailwind/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import cns from "classnames";
import useAuth from "../hook/useAuth";
import { useDispatch } from "react-redux";
import { removeAuth } from "../redux/authSlice";
import { useEffect } from "react";
import { X } from "lucide-react";

const navLinks = [
  {
    label: "Memos",
    link: "/memos",
  },
  // {
  //   label: "Poems",
  //   link: "/poems",
  // },
  // {
  //   label: "Todos",
  //   link: "/todos",
  // },
];

export default function Header() {
  return (
    <header className=" shadow sticky top-0 left-0 w-full bg-white z-10">
      <nav className=" container mx-auto h-[70px] flex justify-between items-center">
        <div>
          <Link to={"/"} className=" text-2xl font-bold">
            DD
          </Link>
        </div>
        <div className=" hidden md:flex items-center gap-[40px]">
          {navLinks.map(({ label, link }, id) => (
            <NavLink key={id} to={link}>
              {label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:block">
          <AuthBtn />
        </div>
        <div className=" md:hidden">
          <MbMenu />
        </div>
      </nav>
    </header>
  );
}

function MbMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  function menuToggle() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }
  }, [menuOpen]);
  return (
    <>
      <Menu size={28} onClick={menuToggle} />
      <div
        className={cns(
          "h-[150vh] fixed bottom-0 w-full bg-gray-100 transition-all duration-300",
          {
            "right-0": menuOpen,
            "right-[-100%]": !menuOpen,
          }
        )}
      >
        <div className=" flex flex-col container mx-auto py-[40px] space-y-[20px]">
          <button className=" absolute top-5 right-5" onClick={menuToggle}>
            <X />
          </button>
          {navLinks.map(({ label, link }, id) => (
            <NavLink key={id} to={link} onClick={menuToggle}>
              {label}
            </NavLink>
          ))}
          <AuthBtn />
        </div>
      </div>
    </>
  );
}

function AuthBtn() {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeAuth());
  };
  return (
    <>
      {currentUser ? (
        <Button onClick={logout} className=" w-fit">
          Logout
        </Button>
      ) : (
        <Link to={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
}
