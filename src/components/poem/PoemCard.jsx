import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { dateFormat } from "../../libs/date-format";
import ConfirmPopup from "../popup/ConfirmPopup";
import { stringSplit } from "../../libs/string-extra";
import { Link } from "react-router-dom";
import { UpdatePoemBtn } from "..";

export default function PoemCard({ poem }) {
  return (
    <Card>
      <CardBody>
        <Link to={`/poems/${poem?.id}`}>
          <Typography variant="h5" className=" mb-2 leading-[30px] font-popin">
            {poem.title}
          </Typography>
          <Typography className=" font-normal font-popin">
            {stringSplit(poem.description, 100)}
          </Typography>
        </Link>
      </CardBody>
      <CardFooter className=" pt-0 mt-auto">
        <div className=" flex items-center justify-between">
          <span className=" text-gray-600">{dateFormat(poem.created_at)}</span>
          <div className=" flex items-center gap-3">
            <UpdatePoemBtn data={poem} />
            <ConfirmPopup label={"Poem"} type={"poem"} itemId={poem?.id} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
