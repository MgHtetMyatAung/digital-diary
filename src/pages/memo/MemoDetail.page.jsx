import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router";
import { apiHooks } from "../../redux/createApis";
import { Loading } from "../../components";
import BackButton from "../../components/actions/BackButton";
import ShareButton from "../../components/actions/ShareButton";

export default function MemoDetailPage() {
  const param = useParams();
  const { useGetMemoDetailQuery } = apiHooks;
  const { data, isLoading } = useGetMemoDetailQuery(param.memoId);
  return (
    <section>
      <div className="container mx-auto pt-5">
        <div className=" flex items-center justify-between">
          <BackButton label={"Back"} to={-1} />
          <ShareButton itemId={param.memoId} />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data?.data ? (
              <div className=" py-6">
                <Typography variant="h4" className=" leading-[30px] font-popin">
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
