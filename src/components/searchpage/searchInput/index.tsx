import { debounce, set } from "lodash";
import {
  searchMovie,
  setSearchActive,
  setSearchedMovies,
} from "../../../stores/movie/actions";
import { FaSearch } from "react-icons/fa";
import { useCallback, useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState<string>("");

  //Debounce the search query for performance optimization
  const request = debounce((query: string) => {
    if (query !== "" && query.length > 2) {
      searchMovie(query);
    }
  }, 500);

  const debounceRequest = useCallback((query: string) => request(query), []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setQuery("");
      setSearchActive(false);
      setSearchedMovies([]);
      return;
    }
    setQuery(e.target.value);
    debounceRequest(e.target.value);
  };

  return (
    <div className="flex start max-w-[560px] w-[90%] mx-auto border-b-2 focus-within:border-m_yellow focus-within:text-m_yellow items-center py-1">
      <input
        type="text"
        value={query}
        onChange={handleOnChange}
        onBlur={() => {
          setSearchActive(false);
        }}
        className="flex-1 bg-transparent outline-none px-2 py-1 focus:text-white"
      />
      <FaSearch className="w-5 h-5 md:w-6 md:h-6" />
    </div>
  );
};

export default SearchInput;
