import { useState } from "react";
import { ContactCart, SkeletonContactCart } from "../../components";
import useFakeArray from "../../hook/useFakeArray";
import { apiHooks } from "../../redux/createApis";
import { Button } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function ContactPage() {
  const { useGetContactsQuery } = apiHooks;
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetContactsQuery(page);
  const fakeArr = useFakeArray(10);
  return (
    <main>
      <div className=" container mx-auto py-5">
        {!data?.contacts?.data?.length > 0 ? (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {fakeArr.map((contact, id) => (
              <SkeletonContactCart key={id} />
            ))}
          </div>
        ) : (
          <div className="">
            {isFetching ? (
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                {fakeArr.map((contact, id) => (
                  <SkeletonContactCart key={id} />
                ))}
              </div>
            ) : (
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                {data?.contacts?.data?.map((contact, id) => (
                  <ContactCart contact={contact} key={id} />
                ))}
              </div>
            )}
            <p>Current Page ({data?.contacts?.current_page})</p>
            <div className=" flex items-center gap-2 mt-2">
              <Button
                onClick={() => setPage((num) => (num > 1 ? num - 1 : num))}
              >
                <ChevronLeft />
              </Button>
              <Button onClick={() => setPage(page + 1)}>
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
