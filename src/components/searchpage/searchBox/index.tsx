import { Movie } from "../../../models/Movie";

import { BsFilm } from "react-icons/bs";

import { w500ImageUrl } from "../../../utils/constants";
import { truncateAndAddEllipsis } from "../../../utils/functions";
import {
  useSearchActive,
  useSearchedMovies,
} from "../../../stores/movie/hooks";
import SearchInput from "../searchInput";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const searchedMovies = useSearchedMovies();
  const searchActive = useSearchActive();

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Find Your Movie
      </h1>

      <SearchInput />

      <AnimatePresence>
        {searchedMovies.length > 0 && (
          <div className="flex flex-col max-w-[560px] w-[90%] gap-2">
            {searchedMovies?.slice(0, 2).map((movie: Movie, index: number) => (
              <motion.div
                initial={{ opacity: 0, y: 40 * (index + 1) }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 * (index + 1) }}
                transition={{ duration: 0.2 }}
                key={movie.id}
                className="flex flex-row items-start justify-between w-full mx-auto z-10 gap-2 bg-black p-2 rounded-md"
              >
                <div className="flex flex-col items-start justify-start w-[80%] gap-1 text-start">
                  <h1 className="text-bold text-2xl text-m_yellow ">
                    {movie.title}
                  </h1>
                  <span className="text-light text-sm">
                    {truncateAndAddEllipsis(movie.overview, 200)}
                  </span>
                </div>

                <div>
                  {movie.poster_path !== null ? (
                    <img
                      src={w500ImageUrl + movie.poster_path}
                      alt={movie.title}
                      className="w-[94px] h-[141px]"
                    />
                  ) : (
                    <div className="w-[94px] h-[141px] bg-gray-500 flex items-center justify-center">
                      <BsFilm className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {
          //if more than 2 movies are found, show the view more button
          searchedMovies.length > 2 && (
            <motion.div
              transition={{ duration: 0.2 }}
              className=" mx-auto z-10 gap-2 bg-m_yellow p-2 rounded-md"
            >
              <Link to="/list" className="text-bold text-xl text-m_black ">
                View More
              </Link>
            </motion.div>
          )
        }

        {searchedMovies.length === 0 && searchActive && (
          <div className="flex flex-col max-w-[560px] w-[90%] gap-2">
            <div className="flex flex-col items-center justify-center w-full mx-auto z-10 gap-2 bg-black p-2 rounded-md">
              <div className="flex flex-col items-center justify-center w-full mx-auto z-10 gap-2 bg-black p-2 rounded-md">
                <h1 className="text-bold text-2xl text-m_yellow ">
                  Movie not found!
                </h1>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBox;
