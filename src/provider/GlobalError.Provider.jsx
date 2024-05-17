import { CardFooter, Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeErrorInfo } from "../redux/errorSlice";
import { useNavigate } from "react-router";
import { removeAuth } from "../redux/authSlice";

export default function GlobalErrorProvider({ children }) {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const route = useNavigate();

  const goToLogin = () => {
    dispatch(removeAuth());
    dispatch(removeErrorInfo());
    route("/login");
  };

  return (
    <>
      {children}
      {error?.code === 401 ? (
        <section className=" fixed top-0 left-0 bottom-0 w-full h-screen bg-[#33333382] grid place-items-center">
          <Card className=" min-w-[250px]">
            <CardBody>
              <Typography color="red" className=" text-center">
                {error?.message}
              </Typography>
            </CardBody>
            <CardFooter className=" pt-0 text-center">
              <Button onClick={goToLogin}>Login</Button>
            </CardFooter>
          </Card>
        </section>
      ) : null}
    </>
  );
}
