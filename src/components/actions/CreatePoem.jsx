import { Button } from "@material-tailwind/react";
import EditorPopup from "../popup/EditorPopup";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function CreatePoem() {
  const [openEditBox, setOpenEditBox] = useState(false);
  return (
    <div>
      <Button size="sm" onClick={() => setOpenEditBox(true)}>
        <Plus color="white" />
      </Button>
      {openEditBox ? (
        <EditorPopup
          label={"Poem"}
          type={"poem"}
          setOpen={setOpenEditBox}
          status={"create"}
        />
      ) : null}
    </div>
  );
}
