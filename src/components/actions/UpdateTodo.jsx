import EditorPopup from "../popup/EditorPopup";
import { useState } from "react";
import { SquarePen } from "lucide-react";

export default function UpdateTodo({ data }) {
  const [openEditBox, setOpenEditBox] = useState(false);
  return (
    <>
      <button size="sm" onClick={() => setOpenEditBox(true)}>
        <SquarePen size={20} />
      </button>
      {openEditBox ? (
        <EditorPopup
          label={"Todo"}
          type={"todo"}
          setOpen={setOpenEditBox}
          status={"edit"}
          item={data}
        />
      ) : null}
    </>
  );
}
