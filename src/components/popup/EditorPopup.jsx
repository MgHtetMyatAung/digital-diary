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

export default function EditorPopup({ type, status, setOpen, label }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [check, setCheck] = useState("");

  const { useCreateMemoMutation } = apiHooks;
  const [createMemo, { isLoading, isSuccess }] = useCreateMemoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "memo") {
      if (status === "create") {
        await createMemo({ title, description: desc });
      } else if (status === "edit") {
        await createMemo({ title, description: desc });
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
    if (isSuccess) {
      changeValue(false, setOpen);
    }
  }, [isSuccess, setOpen]);

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
              defaultValue={status === "edit" ? title : ""}
              onChange={(e) => changeValue(e.target.value, setTitle)}
            />
            <Textarea
              label="Description"
              rows={7}
              defaultValue={status === "edit" ? desc : ""}
              onChange={(e) => changeValue(e.target.value, setDesc)}
            />
          </CardBody>
          <CardFooter className=" pt-0 flex items-center justify-end gap-3">
            <Button color="red" onClick={() => changeValue(false, setOpen)}>
              Close
            </Button>
            <Button type="submit" loading={isLoading}>
              Create
            </Button>
          </CardFooter>
        </Card>
      </form>
    </section>
  );
}
