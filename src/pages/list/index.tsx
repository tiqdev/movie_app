import { useParams } from "react-router";
import SearchListItem from "../../components/searchpage/searchListItem";
import { Favorite, Movie } from "../../models/Movie";
import {
  useFavoriteMovies,
  useIsFavoriteLoading,
  useIsLoading,
  usePage,
  useSearchIsLoading,
  useSearchQuery,
  useSearchedMovies,
  useTotalPages,
  useTotalResults,
} from "../../stores/movie/hooks";
import { useEffect } from "react";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
  searchMovie,
} from "../../stores/movie/actions";
import SearchInput from "../../components/searchpage/searchInput";
import AnimatePage from "../../components/common/animatePage";
import Loading from "../../components/common/loading";
import useInfiniteScroll from "react-infinite-scroll-hook";
import ScrollToTop from "../../components/common/scrollToTop";
import { useUser } from "../../stores/user/hooks";
import { motion } from "framer-motion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ListPage = () => {
  const searchedMovies = useSearchedMovies();
  const isLoading = useIsLoading();
  const searchQuery = useSearchQuery();
  const page = usePage();
  const totalResults = useTotalResults();
  const totalPages = useTotalPages();
  const favoriteMovies = useFavoriteMovies();
  const user = useUser();
  const isFavoriteLoading = useIsFavoriteLoading();
  const isSearchLoading = useSearchIsLoading();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: page <= totalPages,
    onLoadMore: () => {
      searchMovie({ query: searchQuery, page: page });
    },
    disabled: false,
    rootMargin: "0px 0px 400px 0px",
  });

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
    <AnimatePage>
      <div className="mt-[80px] flex flex-col items-start justify-start gap-4 w-full max-w-[1280px] mx-auto px-4 relative">
        <ScrollToTop />
        <div className="w-full flex md:flex-row flex-col md:mt-[80px] mt-[40px] justify-between items-center gap-2">
          <h1 className="text-xl md:text-2xl font-normal text-center text-white">
            Results for:{" "}
            <span className="font-bold text-m_yellow">{searchQuery}</span>
          </h1>
          <div className="w-full max-w-[500px]">
            <SearchInput />
          </div>
        </div>

        {(isSearchLoading || isLoading) && <Loading />}

        <div className="flex flex-col gap-4 my-5 mb-[100px] md:mt-[50px] mt-[20px] w-full">
          {searchedMovies?.map((movie: Movie, index: number) => {
            let isFavorite = favoriteMovies.find(
              (favoriteMovie: Favorite) => favoriteMovie.movieId === movie.id
            );

            return (
              <div className="relative" key={index}>
                <SearchListItem movie={movie} />

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="p-2 bg-m_brown absolute top-2 right-2 rounded-full cursor-pointer"
                  onClick={() => handleFavorite(movie)}
                >
                  {user.email !== "" &&
                    (isFavorite ? (
                      <AiFillStar className="text-m_yellow z-20" />
                    ) : (
                      <AiOutlineStar className="text-m_yellow z-20" />
                    ))}
                </motion.div>
              </div>
            );
          })}

          {totalResults === searchedMovies.length && (
            <div className="text-white text-center">No more results</div>
          )}

          {page <= totalPages && !isLoading && !isSearchLoading && (
            <div ref={sentryRef}>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </AnimatePage>
  );
};

export default ListPage;
