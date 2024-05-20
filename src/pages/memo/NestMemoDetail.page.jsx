import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router";
import { Loading } from "../../components";
import { apiHooks } from "../../redux/createApis";
import { Helmet } from "react-helmet-async";

export default function NestMemoDetailPage() {
  const shareUrl = window.location.href;
  const { nestMemoId } = useParams();
  const { useGetMemoDetailQuery } = apiHooks;
  const { data, isLoading } = useGetMemoDetailQuery(nestMemoId);
  return (
    <section>
      <Helmet>
        <meta property="og:title" content={data?.data.title} />
        <meta property="og:description" content={data?.data.description} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container mx-auto pt-5">
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