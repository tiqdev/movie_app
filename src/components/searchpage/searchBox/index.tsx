import { Movie } from "../../../models/Movie";

import {
  useSearchActive,
  useSearchQuery,
  useSearchedMovies,
} from "../../../stores/movie/hooks";
import SearchInput from "../searchInput";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SearchListItem from "../searchListItem";
import ErrorText from "../../common/errorText";

const SearchBox = () => {
  const searchedMovies = useSearchedMovies();
  const searchActive = useSearchActive();
  const searchQuery = useSearchQuery();

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Find Your Movie
      </h1>

      <div className="max-w-[560px] w-[90%]">
        <SearchInput />
      </div>

      <AnimatePresence>
        {searchedMovies.length > 0 && (
          <div className="flex flex-col max-w-[560px] w-[90%] gap-2">
            {searchedMovies?.slice(0, 2).map((movie: Movie, index: number) => (
              <SearchListItem movie={movie} key={movie.id} />
            ))}
          </div>
        )}

        {
          //if more than 2 movies are found, show the view more button
          searchedMovies.length > 2 && (
            <Link
              to={`/list/${searchQuery}`}
              className="font-bold text-lg text-m_black mx-auto z-10 gap-2 bg-m_yellow p-2 px-4 rounded-md hover:bg-m_brown hover:text-m_yellow transition-color duration-300 ease-in-out"
            >
              View More
            </Link>
          )
        }

        {searchedMovies.length === 0 && searchActive && (
          <div className="flex max-w-[560px] w-[90%] gap-2">
            <ErrorText text="No Movies Found" />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBox;
