import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function RouteProvider({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
