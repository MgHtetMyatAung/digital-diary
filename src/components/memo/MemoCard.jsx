import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { dateFormat } from "../../libs/date-format";
import ConfirmPopup from "../popup/ConfirmPopup";
import UpdateMemo from "../actions/UpdateMemo";
import { stringSplit } from "../../libs/string-extra";
import { Link } from "react-router-dom";

export default function MemoCard({ memo }) {
  return (
    <Card>
      <CardBody>
        <Link to={`/memos/${memo?.id}`}>
          <Typography variant="h5" className=" mb-2 leading-[30px]">
            {memo.title}
          </Typography>
        </Link>
        <Typography className=" font-normal">
          {stringSplit(memo.description, 100)}
        </Typography>
      </CardBody>
      <CardFooter className=" pt-0 mt-auto">
        <div className=" flex items-center justify-between">
          <span className=" text-gray-600">{dateFormat(memo.created_at)}</span>
          <div className=" flex items-center gap-3">
            <UpdateMemo data={memo} />
            <ConfirmPopup label={"Memo"} type={"memo"} itemId={memo?.id} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
