import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router";
import { Loading } from "../../components";
import { apiHooks } from "../../redux/createApis";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function NestMemoDetailPage() {
  const shareUrl = window.location.href;
  const { nestMemoId } = useParams();
  const { useGetMemoDetailQuery } = apiHooks;
  const { data, isLoading, isError } = useGetMemoDetailQuery(nestMemoId);
  return (
    <section>
      <div className="container mx-auto pt-5">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Helmet>
              <title>{data?.data.title}</title>
              <meta property="og:title" content={data?.data.title} />
              <meta
                property="og:description"
                content={data?.data.description}
              />
              <meta property="og:url" content={shareUrl} />
              <meta property="og:type" content="website" />
            </Helmet>
            {data?.data ? (
              <div className=" py-6">
                <Typography variant="h5" className=" leading-[30px] font-popin">
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
      {isError && (
        <div className=" w-full h-screen grid place-items-center">
          <div className=" text-center">
            <p className=" font-medium">Sorry Data Not Found !</p>
            <Link to={"/"}>
              <Button size="sm" className=" mt-3">
                Home
              </Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
