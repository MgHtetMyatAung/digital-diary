/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiHooks } from "../../redux/createApis";
export default function ContactCart({ contact }) {
  const [open, setOpen] = useState(false);
  const { useDeleteContactMutation } = apiHooks;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const route = useNavigate();
  const navigate = (id) => {
    route(`/contacts/${id}`);
  };
  const handleDelete = async () => {
    await deleteContact(contact?.id);
  };
  return (
    <div className="">
      <article className=" p-4 rounded-md shadow-sm border cursor-pointer">
        <h1
          className=" text-lg font-medium"
          onClick={() => navigate(contact?.id)}
        >
          {contact?.name}
        </h1>
        <p className=" text-gray-600">{contact?.phone}</p>
        <Button
          variant="outlined"
          color="red"
          className=" mt-3"
          onClick={() => setOpen(true)}
        >
          Delete
        </Button>
      </article>
      {open && (
        <div className=" w-full h-screen fixed top-0 left-0 right-0 bg-[#333333c0] grid place-items-center z-20">
          <div className=" bg-white rounded-md p-5">
            <h2>Are you sure to delete ?</h2>
            <div className="flex items-center gap-3 mt-3">
              <Button onClick={handleDelete} loading={isLoading}>
                Yes
              </Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
