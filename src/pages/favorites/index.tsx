import SearchListItem from "../../components/searchpage/searchListItem";
import { Favorite, Movie } from "../../models/Movie";
import {
  useFavoriteMovies,
  useIsFavoriteLoading,
} from "../../stores/movie/hooks";
import { useEffect } from "react";
import {
  getFavoriteMovies,
  removeFavoriteMovie,
} from "../../stores/movie/actions";
import AnimatePage from "../../components/common/animatePage";
import Loading from "../../components/common/loading";
import ScrollToTop from "../../components/common/scrollToTop";
import Title from "../../components/common/title";
import FavoriteItem from "../../components/favoritespage/favoriteItem";
import { FaMinusCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const FavoritesPage = () => {
  const favorites = useFavoriteMovies();
  const favoritesIsLoading = useIsFavoriteLoading();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      getFavoriteMovies(user.uid);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemoveFavorite = (favoriteMovie: Favorite) => {
    removeFavoriteMovie(favoriteMovie);
  };

  return (
    <AnimatePage>
      <div className="mt-[80px] flex flex-col items-start justify-start gap-4 w-full max-w-[1280px] mx-auto px-4 relative">
        <ScrollToTop />
        <div className="w-full flex md:flex-row flex-col md:mt-[80px] mt-[40px] justify-between items-center gap-2">
          <Title title="My Favorite Movies" />
        </div>

        {!favoritesIsLoading && favorites?.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <h1 className="text-[20px] text-white font-medium">
              You don't have any favorite movies.
            </h1>
          </div>
        )}

        {!favoritesIsLoading && favorites?.length > 0 && (
          <div className="flex flex-col gap-4 my-5 mb-[100px] mt-[20px] w-full">
            {favorites?.map((favorite: Favorite, index: number) => (
              <div className="relative" key={index}>
                <FavoriteItem favorite={favorite} />
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="p-2 bg-m_red absolute top-2 right-2 rounded-full cursor-pointer"
                  onClick={() => {
                    handleRemoveFavorite(favorite);
                  }}
                >
                  <FaMinusCircle className="text-m_black z-20" />
                </motion.div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimatePage>
  );
};

export default FavoritesPage;
