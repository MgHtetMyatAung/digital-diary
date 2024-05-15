import { useState } from "react";
import { apiHooks } from "../../redux/createApis";
import { EmptyData, Loading, MemoCard, SearchForm } from "../../components";
import { Button } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MemoPage() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const { useGetMemosQuery } = apiHooks;
  const { data, isFetching } = useGetMemosQuery({ page, perPage, search });

  return (
    <main className=" min-h-[100vh] pt-[70px]">
      <div className=" container mx-auto my-5">
        <SearchForm setValue={setSearch} />
      </div>
      {isFetching ? (
        <Loading />
      ) : (
        <section className=" container mx-auto min-h-[calc(100vh-70px)]">
          <>
            {data?.items?.length > 0 ? (
              <div className="">
                <div className=" min-h-[70vh]">
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {data?.items?.map((memo) => (
                      <MemoCard key={memo.id} memo={memo} />
                    ))}
                  </div>
                </div>
                <div className=" space-x-3">
                  <Button size="sm">
                    <ChevronLeft color="white" />
                  </Button>
                  <Button size="sm">
                    <ChevronRight color="white" />
                  </Button>
                </div>
              </div>
            ) : (
              <EmptyData />
            )}
          </>
        </section>
      )}
    </main>
  );
}
