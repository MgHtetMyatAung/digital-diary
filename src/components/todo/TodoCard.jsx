import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { dateFormat } from "../../libs/date-format";
import { UpdateTodoBtn } from "..";
import ConfirmPopup from "../popup/ConfirmPopup";
import { apiHooks } from "../../redux/createApis";

export default function TodoCard({ todo }) {
  const { useUpdateTodoMutation } = apiHooks;
  const [updateTodo, { isLoading, isSuccess }] = useUpdateTodoMutation();
  const handleCheck = async (status) => {
    const data = { title: todo.title, done: status };
    await updateTodo({ data, id: todo.id });
  };
  return (
    <Card>
      <CardBody className="inline-flex items-center">
        <label
          className="relative flex items-center p-3 rounded-full cursor-pointer text-white"
          htmlFor={`check${todo.id}`}
        >
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-gray-900 hover:before:opacity-10"
            id={`check${todo.id}`}
            defaultChecked={todo.done}
            onChange={(e) => handleCheck(e.target.checked)}
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className="mt-px font-normal text-gray-700 cursor-pointer select-none"
          htmlFor={`check${todo.id}`}
        >
          {todo.title}
        </label>
      </CardBody>
      <CardFooter className=" pt-0">
        <div className=" flex items-center justify-between pl-3">
          <span className=" text-gray-600">{dateFormat(todo.created_at)}</span>
          <div className=" flex items-center gap-3">
            <UpdateTodoBtn data={todo} />
            <ConfirmPopup label={"Todo"} type={"todo"} itemId={todo?.id} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
