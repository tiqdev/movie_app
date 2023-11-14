import { Favorite, Movie } from "../../../models/Movie";

import {
  useFavoriteMovies,
  useIsFavoriteLoading,
  useSearchActive,
  useSearchIsLoading,
  useSearchQuery,
  useSearchedMovies,
} from "../../../stores/movie/hooks";
import SearchInput from "../searchInput";
import { Link } from "react-router-dom";
import SearchListItem from "../searchListItem";
import ErrorText from "../../common/errorText";
import Loading from "../../common/loading";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useUser } from "../../../stores/user/hooks";
import { MovieDetail } from "../../../models/MovieDetail";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../../stores/movie/actions";

const SearchBox = () => {
  const searchedMovies = useSearchedMovies();
  const searchActive = useSearchActive();
  const searchQuery = useSearchQuery();
  const searchIsLoading = useSearchIsLoading();
  const favoriteMovies = useFavoriteMovies();
  const user = useUser();
  const isFavoriteLoading = useIsFavoriteLoading();

  const handleFavorite = async (movie: Movie) => {
    let favoriteMovie = {
      userId: user.uid,
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      overview: movie.overview,
      favoriteId: user.uid + movie.id,
    };

    const isFavorite = favoriteMovies.find(
      (favoriteMovie: Favorite) => favoriteMovie.movieId === movie.id
    );

    if (isFavorite) {
      await removeFavoriteMovie(favoriteMovie);
    } else {
      await addFavoriteMovie(favoriteMovie);
    }
  };

  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Find Your Movie
      </h1>

      <div className="max-w-[560px] w-[90%]">
        <SearchInput />
      </div>

      <>
        {searchedMovies.length > 0 && (
          <div className="flex flex-col max-w-[560px] w-[90%] gap-2">
            {!isFavoriteLoading &&
              searchedMovies?.slice(0, 2).map((movie: Movie, index: number) => {
                let isFavorite = favoriteMovies.find(
                  (favoriteMovie: Favorite) =>
                    favoriteMovie.movieId === movie.id
                );

                return (
                  <div className="relative" key={index}>
                    <SearchListItem movie={movie} />
                    {user.email !== "" && (
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="p-2 bg-m_brown absolute top-2 right-2 rounded-full cursor-pointer"
                        onClick={() => handleFavorite(movie)}
                        data-testid={isFavorite ? "favorite" : "not-favorite"}
                      >
                        {isFavorite ? (
                          <AiFillStar className="text-m_yellow z-20" />
                        ) : (
                          <AiOutlineStar className="text-m_yellow z-20" />
                        )}
                      </motion.div>
                    )}
                  </div>
                );
              })}
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

        {searchIsLoading && (
          <div className="flex max-w-[560px] w-[90%] gap-2 h-2">
            <Loading />
          </div>
        )}

        {searchedMovies.length === 0 && searchActive && (
          <div className="flex max-w-[560px] w-[90%] gap-2">
            <ErrorText text="No Movies Found" />
          </div>
        )}
      </>
    </>
  );
};

export default SearchBox;
