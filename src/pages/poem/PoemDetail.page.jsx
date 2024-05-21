import { Typography } from "@material-tailwind/react";
import { useParams } from "react-router";
import { apiHooks } from "../../redux/createApis";
import { Loading } from "../../components";
import BackButton from "../../components/actions/BackButton";
import ShareButton from "../../components/actions/ShareButton";

export default function PoemDetailPage() {
  const param = useParams();
  const { useGetPoemDetailQuery } = apiHooks;
  const { data, isLoading } = useGetPoemDetailQuery(param.poemId);
  return (
    <section>
      <div className="container mx-auto pt-5">
        <div className=" flex items-center justify-between">
          <BackButton label={"Back"} to={-1} />
          <ShareButton itemId={param.poemId} />
        </div>
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
