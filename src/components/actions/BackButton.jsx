import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BackButton({ label, to }) {
  return (
    <Link to={to}>
      <button className=" flex items-center gap-3">
        <ChevronLeft size={18} /> {label}
      </button>
    </Link>
  );
}
