/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CardFooter, CardHeader, Textarea } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
import { useState } from "react";
import { apiHooks } from "../../redux/createApis";
import { useEffect } from "react";

export default function EditorPopup({ type, status, setOpen, label, item }) {
  const [check, setCheck] = useState("");

  const { useCreateMemoMutation, useUpdateMemoMutation } = apiHooks;
  const [createMemo, { isLoading, isSuccess }] = useCreateMemoMutation();
  const [
    updateMemo,
    { isLoading: updateMemoLoading, isSuccess: updateMemoSuccess },
  ] = useUpdateMemoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");

    if (type === "memo") {
      if (status === "create") {
        await createMemo({ title, description });
      } else if (status === "edit") {
        const data = { title, description };
        await updateMemo({ data, id: item.id });
      }
    } else if (type === "poem") {
      if (status === "create") {
      } else if (status === "edit") {
      }
    } else if (type === "todo") {
      if (status === "create") {
      } else if (status === "edit") {
      }
    }
  };

  const changeValue = (data, setValue) => {
    setValue(data);
  };

  useEffect(() => {
    if (isSuccess || updateMemoSuccess) {
      changeValue(false, setOpen);
    }
  }, [isSuccess, updateMemoSuccess, setOpen]);

  return (
    <section className=" fixed top-0 left-0 bottom-0 w-full h-screen bg-[#33333382] grid place-items-center z-20">
      <form
        action=""
        className=" w-[320px] md:w-[400px]"
        onSubmit={handleSubmit}
      >
        <Card className=" w-full">
          <CardHeader>
            <Typography variant="h6" className=" text-center py-2">
              {status === "edit" ? "Edit" : "Create"} {label}
            </Typography>
          </CardHeader>
          <CardBody className=" space-y-3">
            <Input
              label="Title"
              name="title"
              defaultValue={status === "edit" ? item?.title : ""}
            />
            <Textarea
              label="Description"
              name="description"
              rows={7}
              defaultValue={status === "edit" ? item?.description : ""}
            />
          </CardBody>
          <CardFooter className=" pt-0 flex items-center justify-end gap-3">
            <Button color="red" onClick={() => changeValue(false, setOpen)}>
              Close
            </Button>
            <Button type="submit" loading={isLoading || updateMemoLoading}>
              {status === "edit" ? "Update" : "Create"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
}
