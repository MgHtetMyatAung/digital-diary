import { useEffect } from "react";
import useAuth from "../hook/useAuth";

const TawkToWidget = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    Tawk_API.visitor = {
      name: "", // Replace with the logged-in user's name
      email: "", // Replace with the logged-in user's email
    };

    var s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/66c445530cca4f8a7a77dec1/1i5natk7s";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    return () => {
      document.body.removeChild(s1);
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      // If currentUser is logged in, send their info to Tawk.to
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.visitor = {
        name: currentUser.name,
        email: currentUser.email,
      };
    }
  }, [currentUser]);

  return null; // No UI needed for this component
};

export default TawkToWidget;
