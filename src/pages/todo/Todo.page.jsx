import { useState } from "react";
import { apiHooks } from "../../redux/createApis";
import {
  CreateTodoBtn,
  EmptyData,
  Loading,
  Pagination,
  SearchForm,
  TodoCard,
} from "../../components";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function TodoPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { useGetTodoListsQuery } = apiHooks;
  const { data, isFetching } = useGetTodoListsQuery({ page, perPage, search });

  const datas = data?.items?.filter((item) =>
    filter == "all"
      ? item
      : filter == "todo"
      ? item.done === false
      : filter == "done"
      ? item.done === true
      : item
  );

  useEffect(() => {
    setSearchParams({ page: String(page) });
  }, [page, setSearchParams]);

  return (
    <main className=" min-h-[100vh]">
      <div className=" container mx-auto my-5 space-y-3">
        <SearchForm
          setValue={setSearch}
          setPage={setPage}
          placeholder={"Search todos"}
        />
        <div className=" flex justify-between items-center">
          <CreateTodoBtn />
          <div className="relative h-10 w-[100px]">
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option value="all">All</option>
              <option value="todo">Todo</option>
              <option value="done">Done</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Filter todos
            </label>
          </div>
        </div>
      </div>
      {isFetching ? (
        <Loading />
      ) : (
        <section className=" container mx-auto min-h-[calc(100vh-200px)]">
          <>
            {datas?.length > 0 ? (
              <div className="">
                <div className=" min-h-[60vh]">
                  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    {datas?.map((todo) => (
                      <TodoCard key={todo.id} todo={todo} />
                    ))}
                  </div>
                </div>
                <Pagination
                  next={data?.nextPage}
                  prev={data?.prevPage}
                  curPage={data?.curPage}
                  setPage={setPage}
                  setParams={setSearchParams}
                  paramName={"page"}
                  totalPage={data?.pageTotal}
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
