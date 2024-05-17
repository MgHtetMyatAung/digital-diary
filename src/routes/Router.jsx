import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import AuthenticationProvider from "../provider/Auth.Provider";
import GlobalErrorProvider from "../provider/GlobalError.Provider";
export default function Router() {
  return (
    <Routes>
      {routes.map(({ path, element, access }, id) => {
        return (
          <Route
            path={path}
            element={
              access === "user" ? (
                <GlobalErrorProvider>
                  <AuthenticationProvider>{element}</AuthenticationProvider>
                </GlobalErrorProvider>
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
