import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Trash2, SquarePen } from "lucide-react";
import { dateFormat } from "../../libs/date-format";

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
          <div className=" space-x-3">
            <button>
              <SquarePen size={20} />
            </button>
            <button>
              <Trash2 size={20} color="red" />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
