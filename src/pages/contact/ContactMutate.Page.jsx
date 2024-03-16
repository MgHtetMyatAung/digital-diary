import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { apiHooks } from "../../redux/createApis";
import { Textarea } from "@material-tailwind/react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UpdateContact from "./UpdateContact";

export default function ContactMutatePage() {
  const [searchParams] = useSearchParams();
  const contactId = searchParams.get("id");
  const formRef = useRef(null);
  const { useCreateContactMutation } = apiHooks;
  const [createContact, { isLoading, isError, error, isSuccess }] =
    useCreateContactMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await createContact(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      formRef.current.reset();
    }
  }, [isSuccess]);
  return (
    <section>
      {contactId ? (
        <UpdateContact />
      ) : (
        <main className=" container mx-auto">
          <div className=" mt-5">
            <h1 className=" text-xl font-semibold">Create New Contact</h1>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
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
            <Button type="submit" loading={isLoading}>
              {isLoading ? "Loading" : "Create"}
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
      )}
    </section>
  );
}
