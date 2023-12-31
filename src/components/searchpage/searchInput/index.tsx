import { debounce } from "lodash";
import { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import {
  searchMovie,
  setPage,
  setSearchActive,
  setSearchQuery,
  setSearchedMovies,
} from "../../../stores/movie/actions";
import { useSearchQuery } from "../../../stores/movie/hooks";

const SearchInput = () => {
  const query = useSearchQuery();

  //Debounce the search query for performance optimization
  const request = debounce((query: string) => {
    if (query !== "" && query.length > 2) {
      setPage(1);
      searchMovie({ query, page: 1 });
    }
  }, 1000);

  const debounceRequest = useCallback((query: string) => request(query), []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSearchQuery("");
      setSearchActive(false);
      setSearchedMovies([]);
      return;
    }
    setSearchQuery(e.target.value);
    debounceRequest(e.target.value);
  };

  return (
    <div className="flex start mx-auto border-b-2 focus-within:border-m_yellow focus-within:text-m_yellow items-center py-1 placeholder:text-m_yellow">
      <input
        type="text"
        value={query}
        placeholder="Search for a movie"
        onChange={handleOnChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            try {
              (e.target as HTMLElement).blur();

              setPage(1);
              searchMovie({ query, page: 1 });
            } catch (e) {
              console.log(e);
            }
          }
        }}
        className="flex-1 bg-transparent outline-none px-2 py-1 focus:text-white"
      />
      <FaSearch className="w-5 h-5 md:w-6 md:h-6" />
    </div>
  );
};

export default SearchInput;

/*
 onBlur={() => {
          setSearchActive(false);
        }}
*/
