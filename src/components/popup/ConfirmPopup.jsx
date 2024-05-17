import { CardFooter, Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { apiHooks } from "../../redux/createApis";
import { useEffect } from "react";

export default function ConfirmPopup({ itemId, type, label }) {
  const [openComfirmBox, setOpenComfirmBox] = useState(false);
  const { useDeleteMemoMutation } = apiHooks;
  const [deleteMemo, { isLoading, isSuccess }] = useDeleteMemoMutation();
  const handleDelete = async (e) => {
    e.preventDefault();
    if (type === "memo") {
      await deleteMemo(itemId);
    } else if (type === "poem") {
    } else if (type === "todo") {
    }

    if (isSuccess) {
      setOpenComfirmBox(false);
    }
  };

  return (
    <>
      <button onClick={() => setOpenComfirmBox(true)}>
        <Trash2 size={20} color="red" />
      </button>
      {openComfirmBox ? (
        <section className=" m-0 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[#33333382] grid place-items-center z-20">
          <form action="" className="min-w-[250px]" onSubmit={handleDelete}>
            <Card className=" ">
              <CardBody>
                <Typography color="red" className=" text-center">
                  Are you sure to delete this {label}?
                </Typography>
              </CardBody>
              <CardFooter className=" pt-0 flex items-center justify-center gap-3">
                <Button onClick={() => setOpenComfirmBox(false)}>Cancle</Button>
                <Button type="submit" color="red" loading={isLoading}>
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </form>
        </section>
      ) : null}
    </>
  );
}
