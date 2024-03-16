/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export default function PostCart({ post }) {
  const route = useNavigate();
  const navigate = (id) => {
    route(`/posts/${id}`);
  };
  return (
    <article
      className=" p-4 rounded-md shadow-sm border min-h-[110px] cursor-pointer"
      onClick={() => navigate(post?.id)}
    >
      <h1 className=" text-lg font-medium">{post?.title}</h1>
      <p className=" text-gray-600">{post?.body}</p>
    </article>
  );
}
