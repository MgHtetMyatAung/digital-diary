import { Link } from "react-router-dom";
import { apiHooks } from "../../redux/createApis";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";

export default function ContactDetailPage() {
  const { contactId } = useParams();
  const { useGetContactDetailQuery } = apiHooks;
  const { data, isLoading } = useGetContactDetailQuery(contactId);
  console.log(data);
  return (
    <section className="">
      <main className="container mx-auto">
        {isLoading ? (
          <SkeletonBox />
        ) : (
          <Card className="mt-6 w-full md:w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {data?.contact?.name}
              </Typography>
              <Typography>{data?.contact?.phone}</Typography>
            </CardBody>

            <CardFooter className="pt-0 flex gap-2 items-center">
              <Link to={"/contacts"}>
                <Button>Back</Button>
              </Link>
              <Link to={`/contact-mutate?id=${data?.contact?.id}`}>
                <Button>Edit</Button>
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
    <div className=" w-full md:w-[380px] h-[170px] shadow rounded-md p-5 space-y-2 mt-6">
      <button className=" bg-gray-100 shadow rounded-md w-full h-[33px]"></button>
      <button className=" bg-gray-100 shadow rounded-md w-full h-[33px]"></button>
      <button className=" bg-gray-100 shadow rounded-md w-full h-[33px]"></button>
    </div>
  );
}
