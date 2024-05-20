import { Button } from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function Pagination({
  setPage,
  next,
  prev,
  curPage,
  totalPage,
}) {
  return (
    <div className=" flex items-center justify-center py-5 gap-5">
      <Button
        size="sm"
        disabled={curPage === 1}
        onClick={() => setPage((page) => page - 1)}
      >
        <ChevronLeft color="white" />
      </Button>
      <span>Current Page - {curPage}</span>
      <Button
        size="sm"
        disabled={totalPage === curPage}
        onClick={() => setPage((page) => page + 1)}
      >
        <ChevronRight color="white" />
      </Button>
    </div>
  );
}
