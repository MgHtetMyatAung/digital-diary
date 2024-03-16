import { Header } from "../components";

// eslint-disable-next-line react/prop-types
export default function LayoutProvider({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
