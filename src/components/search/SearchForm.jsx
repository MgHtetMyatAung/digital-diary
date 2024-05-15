import { Input } from "@material-tailwind/react";

export default function SearchForm({ setValue }) {
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setValue(formData.get("search"));
  };
  return (
    <form action="" onSubmit={handleSearch}>
      <Input type="text" name="search" label="Search memos" />
    </form>
  );
}
