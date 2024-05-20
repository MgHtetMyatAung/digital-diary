import EditorPopup from "../popup/EditorPopup";
import { useState } from "react";
import { SquarePen } from "lucide-react";

export default function UpdateMemo({ data }) {
  const [openEditBox, setOpenEditBox] = useState(false);
  return (
    <>
      <button size="sm" onClick={() => setOpenEditBox(true)}>
        <SquarePen size={20} />
      </button>
      {openEditBox ? (
        <EditorPopup
          label={"Memo"}
          type={"memo"}
          setOpen={setOpenEditBox}
          status={"edit"}
          item={data}
        />
      ) : null}
    </>
  );
}
