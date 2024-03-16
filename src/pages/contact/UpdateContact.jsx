import { useRef } from "react";
import { apiHooks } from "../../redux/createApis";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export default function UpdateContact() {
  const route = useNavigate();
  const formRef = useRef(null);
  const [searchParams] = useSearchParams();
  const contactId = searchParams.get("id");
  const { useUpdateContactMutation, useGetContactDetailQuery } = apiHooks;
  const [
    updateContact,
    { isLoading: updateLoading, isSuccess: updateSuccess, isError, error },
  ] = useUpdateContactMutation();
  const { data } = useGetContactDetailQuery(contactId);
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(contactId, "ddd");
    const formData = new FormData(e.target);
    await updateContact({ data: formData, id: contactId });
  };

  useEffect(() => {
    if (updateSuccess) {
      route(-1);
    }
  }, [updateSuccess]);
  return (
    <main className=" container mx-auto">
      <div className=" mt-5">
        <h1 className=" text-xl font-semibold">Edit Contact</h1>
      </div>
      <form
        ref={formRef}
        onSubmit={handleUpdate}
        className=" space-y-5 mt-3 max-w-[350px]"
      >
        <div className="">
          <Input
            type="text"
            name="name"
            className=" w-full"
            size={"lg"}
            label="Name"
            autoComplete=""
            defaultValue={data?.contact?.name || ""}
            required
          />
        </div>
        <div className="">
          <Input
            type="number"
            name="phone"
            className=" w-full"
            size={"lg"}
            label="Phone"
            autoComplete=""
            defaultValue={data?.contact?.phone || ""}
            required
          />
        </div>
        <div className="">
          <Input
            type="email"
            name="email"
            className=" w-full"
            size={"lg"}
            label="Email"
            autoComplete=""
          />
        </div>
        <div className="">
          <Textarea name="address" label="Address" className=" w-full" />
        </div>
        <Button type="submit" loading={updateLoading}>
          {updateLoading ? "Loading" : "Update"}
        </Button>
        {isError ? (
          <p className=" text-red-500 text-sm">
            {String(error?.data?.message).split(".")[0]}
          </p>
        ) : (
          <p className=" text-red-500 opacity-0">hide text</p>
        )}
      </form>
    </main>
  );
}
