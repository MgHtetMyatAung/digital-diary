import { useState } from "react";
import { apiHooks } from "../../redux/createApis";
import { MemoCard } from "../../components";
import { Input } from "@material-tailwind/react";

export default function MemoPage() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const { useGetMemosQuery } = apiHooks;
  const { data, isFetching } = useGetMemosQuery({ page, perPage, search });
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearch(formData.get("search"));
  };
  return (
    <main className=" min-h-[100vh] pt-[70px]">
      <section className=" container mx-auto mt-3">
        <form action="" onSubmit={handleSearch}>
          <Input type="text" name="search" label="Search memos" />
        </form>
        {isFetching ? (
          "loading "
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-3">
            {data?.items?.map((memo) => (
              <MemoCard key={memo.id} memo={memo} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
