import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router";
import { apiHooks } from "../../redux/createApis";
import { Loading } from "../../components";
import BackButton from "../../components/actions/BackButton";

export default function MemoDetailPage() {
  const param = useParams();
  const { useGetMemoDetailQuery } = apiHooks;
  const { data, isLoading } = useGetMemoDetailQuery(param.memoId);
  return (
    <section>
      <div className="container mx-auto pt-5">
        <BackButton label={"Back"} to={-1} />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data?.data ? (
              <div className=" py-6">
                <Typography variant="h5" className=" leading-[30px]">
                  {data?.data.title}
                </Typography>
                <p
                  dangerouslySetInnerHTML={{
                    __html: data?.data.description.replaceAll("\n", "<br>"),
                  }}
                  className=" mt-5"
                ></p>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
