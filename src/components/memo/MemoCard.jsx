import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { SquarePen } from "lucide-react";
import { dateFormat } from "../../libs/date-format";
import ConfirmPopup from "../popup/ConfirmPopup";

export default function MemoCard({ memo }) {
  return (
    <Card>
      <CardBody>
        <Typography variant="h5" className=" mb-2">
          {memo.title}
        </Typography>
        <Typography>{memo.description}</Typography>
      </CardBody>
      <CardFooter className=" pt-0">
        <div className=" flex items-center justify-between">
          <span>{dateFormat(memo.created_at)}</span>
          <div className=" flex items-center gap-3">
            <button>
              <SquarePen size={20} />
            </button>
            <ConfirmPopup label={"Memo"} type={"memo"} itemId={memo?.id} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
