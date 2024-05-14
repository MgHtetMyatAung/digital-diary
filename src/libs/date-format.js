import { format } from "date-fns";

export function dateFormat(timestamp) {
  const date = new Date(timestamp);
  return format(date, "dd-MM-yyyy");
}
