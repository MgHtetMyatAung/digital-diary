import { PostCart, SkeletonContactCart } from "../../components";
import useFakeArray from "../../hook/useFakeArray";
import { apiHooks } from "../../redux/createApis";

export default function PostsPage() {
  const { useGetAllPostsQuery } = apiHooks;
  const { data, isLoading } = useGetAllPostsQuery();
  const fakeArr = useFakeArray(30);
  console.log(data);
  return (
    <main>
      <div className=" container mx-auto py-5 gap-3">
        {isLoading ? (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {fakeArr?.map((post, id) => (
              <SkeletonContactCart key={id} />
            ))}
          </div>
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {data?.map((post, id) => (
              <PostCart key={id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
