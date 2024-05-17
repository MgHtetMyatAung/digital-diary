import { useState } from "react";
import { apiHooks } from "../../redux/createApis";
import {
  CreateMemoBtn,
  EmptyData,
  Loading,
  MemoCard,
  Pagination,
  SearchForm,
} from "../../components";

export default function MemoPage() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const { useGetMemosQuery } = apiHooks;
  const { data, isFetching } = useGetMemosQuery({ page, perPage, search });

  return (
    <main className=" min-h-[100vh] pt-[70px]">
      <div className=" container mx-auto my-5 space-y-2">
        <SearchForm setValue={setSearch} />
        <CreateMemoBtn />
      </div>
      {isFetching ? (
        <Loading />
      ) : (
        <section className=" container mx-auto min-h-[calc(100vh-200px)]">
          <>
            {data?.items?.length > 0 ? (
              <div className="">
                <div className=" min-h-[60vh]">
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {data?.items?.map((memo) => (
                      <MemoCard key={memo.id} memo={memo} />
                    ))}
                  </div>
                </div>
                <Pagination
                  next={data?.nextPage}
                  prev={data?.prevPage}
                  curPage={data?.curPage}
                  setPage={setPage}
                />
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
