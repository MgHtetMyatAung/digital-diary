import { HomePage } from "../pages";
import LayoutProvider from "../provider/Layout.Provider";

export const routes = [
  {
    path: "/",
    element: (
      <LayoutProvider>
        <HomePage />
      </LayoutProvider>
    ),
    access: "any",
  },
];
