import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import AuthenticationProvider from "../provider/Auth.Provider";
export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, element, access }, id) => {
        return (
          <Route
            path={path}
            element={
              access === "user" ? (
                <AuthenticationProvider>{element}</AuthenticationProvider>
              ) : (
                element
              )
            }
            key={id}
          />
        );
      })}
    </Routes>
  );
}
