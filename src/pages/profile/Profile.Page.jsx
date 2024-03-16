import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { apiHooks } from "../../redux/createApis";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../redux/authSlice";
import { Plus } from "lucide-react";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { useGetProfileQuery, useLogoutMutation } = apiHooks;
  const { data, isLoading } = useGetProfileQuery();
  const [logout, { isSuccess: isLogout, isLoading: logoutLoading }] =
    useLogoutMutation();

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    if (isLogout) {
      dispatch(removeAuth());
    }
  }, [isLogout]);

  console.log(data);
  return (
    <section>
      <main className="container mx-auto">
        {isLoading ? (
          <SkeletonBox />
        ) : (
          <Card className="mt-6 w-full md:w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {data?.user?.name}
              </Typography>
              <Typography>{data?.user?.email}</Typography>
            </CardBody>
            <CardFooter className="pt-0 flex gap-2 items-center">
              <Link to={"/contact-mutate"}>
                <Button className=" flex items-center gap-2">
                  <Plus size={18} /> Create Contact
                </Button>
              </Link>
            </CardFooter>
            <CardFooter className="pt-0 flex gap-2 items-center">
              <Button
                color="red"
                onClick={handleLogout}
                loading={logoutLoading}
              >
                Logout
              </Button>
              <Link to={"/change-password"}>
                <Button>Change Password</Button>
              </Link>
            </CardFooter>
          </Card>
        )}
      </main>
    </section>
  );
}

function SkeletonBox() {
  return (
    <div className=" w-full md:w-[380px] h-[240px] shadow rounded-md p-5 space-y-3 mt-6">
      <button className=" bg-gray-200 shadow rounded-md w-full h-[35px]"></button>
      <button className=" bg-gray-200 shadow rounded-md w-full h-[35px]"></button>
      <button className=" bg-gray-200 shadow rounded-md w-full h-[35px]"></button>
      <button className=" bg-gray-200 shadow rounded-md w-full h-[35px]"></button>
    </div>
  );
}
