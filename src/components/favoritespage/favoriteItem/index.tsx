import { BsFilm } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Favorite } from "../../../models/Movie";
import { w500ImageUrl } from "../../../utils/constants";
import { truncateAndAddEllipsis } from "../../../utils/functions";

const FavoriteItem = ({ favorite }: { favorite: Favorite }) => {
  return (
    <Link
      to={`/detail/${favorite.movieId}`}
      className="flex sm:flex-row flex-col-reverse items-start justify-between w-full mx-auto z-10 gap-2 bg-black p-4 rounded-[12px]"
    >
      <div className="flex flex-col items-start justify-start sm:w-[80%] w-full gap-1 text-start py-2 sm:pl-2">
        <h1 className="font-bold md:text-2xl text-[16px] text-m_yellow">
          {truncateAndAddEllipsis(favorite.title, 27)}
        </h1>

        <span className="font-light text-sm md:block hidden">
          {truncateAndAddEllipsis(favorite.overview, 200)}
        </span>

        <span className="font-light text-sm md:hidden block">
          {truncateAndAddEllipsis(favorite.overview, 175)}
        </span>
      </div>

      {/* */}
      {favorite.poster !== null ? (
        <img
          src={w500ImageUrl + favorite.poster}
          alt={favorite.title}
          className="w-[94px] h-[141px] rounded-[4px] object-cover object-top sm:block hidden"
        />
      ) : (
        <div className="w-[94px] h-[141px] bg-gray-500  items-center justify-center rounded-[4px] sm:flex hidden">
          <BsFilm className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      )}

      {favorite.backdrop !== null ? (
        <img
          src={w500ImageUrl + favorite.backdrop}
          alt={favorite.title}
          className="w-full h-[141px] rounded-[4px] object-cover object-top sm:hidden block"
        />
      ) : (
        <div className="w-full h-[141px] bg-gray-500  items-center justify-center rounded-[4px] sm:hidden flex">
          <BsFilm className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      )}
    </Link>
  );
};

export default FavoriteItem;
