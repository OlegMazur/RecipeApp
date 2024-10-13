import { useState } from 'react';
import { debounce } from "lodash";

type SearchBarProps = {
  setSearchQuery: (query: string) => void;
};

const SearchBar = ({ setSearchQuery }: SearchBarProps) => {
  const [input, setInput] = useState('');

  const debouncedSearch = debounce((query: string) => {
    setSearchQuery(query);
  }, 2000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a recipe..."
      value={input}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
