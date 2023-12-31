import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaMinusCircle } from "react-icons/fa";
import AnimatePage from "../../components/common/animatePage";
import ScrollToTop from "../../components/common/scrollToTop";
import Title from "../../components/common/title";
import FavoriteItem from "../../components/favoritespage/favoriteItem";
import { Favorite } from "../../models/Movie";
import {
  getFavoriteMovies,
  removeFavoriteMovie,
} from "../../stores/movie/actions";
import {
  useFavoriteMovies,
  useIsFavoriteLoading,
} from "../../stores/movie/hooks";
import { useUser } from "../../stores/user/hooks";

const FavoritesPage = () => {
  const favorites = useFavoriteMovies();
  const favoritesIsLoading = useIsFavoriteLoading();
  const user = useUser();

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

        {user.email === "" && (
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <h1 className="text-[20px] text-white font-medium">
              You need to login to see your favorite movies.
            </h1>
          </div>
        )}

        {!favoritesIsLoading &&
          favorites?.length === 0 &&
          user.email !== "" && (
            <div className="flex flex-col items-center justify-center gap-4 w-full">
              <h1 className="text-[20px] text-white font-medium">
                You don't have any favorite movies.
              </h1>
            </div>
          )}

        {user.email !== "" && favorites?.length > 0 && (
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
