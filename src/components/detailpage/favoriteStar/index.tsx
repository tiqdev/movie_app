import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MovieDetail } from "../../../models/MovieDetail";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../../stores/movie/actions";
import { useFavoriteMovies } from "../../../stores/movie/hooks";
import { motion } from "framer-motion";

interface FavoriteStarProps {
  userId: string;
  movie: MovieDetail;
}

const FavoriteStar = ({ userId, movie }: FavoriteStarProps) => {
  const favoriteMovies = useFavoriteMovies();

  const isFavorite = favoriteMovies.find(
    (favoriteMovie) => favoriteMovie.movieId === movie.id
  );

  const handleFavorite = async () => {
    let favoriteMovie = {
      userId: userId,
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      backdrop: movie.backdrop_path,
      overview: movie.overview,
      favoriteId: userId + movie.id,
    };

    if (isFavorite) {
      await removeFavoriteMovie(favoriteMovie);
    } else {
      await addFavoriteMovie(favoriteMovie);
    }
  };

  const _class = "text-m_yellow cursor-pointer";

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="p-2 bg-m_brown absolute top-2 right-2 rounded-full cursor-pointer flex items-center justify-center"
      onClick={handleFavorite}
    >
      {isFavorite ? (
        <AiFillStar className={_class} />
      ) : (
        <AiOutlineStar className={_class} />
      )}
    </motion.div>
  );
};

export default FavoriteStar;
