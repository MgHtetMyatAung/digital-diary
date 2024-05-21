import { Input } from "@material-tailwind/react";

export default function SearchForm({ setValue, setPage, placeholder }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setPage(1);
    setValue(formData.get("search"));
  };
  return (
    <form action="" onSubmit={handleSearch}>
      <Input type="text" name="search" label={placeholder} />
    </form>
  );
}
