import { Link } from "react-router-dom";
import { Movie } from "../../../models/Movie";
import { truncateAndAddEllipsis } from "../../../utils/functions";
import { w500ImageUrl } from "../../../utils/constants";
import { BsFilm } from "react-icons/bs";

const SearchListItem = ({ movie }: { movie: Movie }) => {
  return (
    <Link
      to={`/detail/${movie.id}`}
      key={movie.id.toString()}
      className="flex flex-row items-start justify-between w-full mx-auto z-10 gap-2 bg-black p-2 rounded-[12px]"
    >
      <div className="flex flex-col items-start justify-start w-[80%] gap-1 text-start py-2 pl-2">
        <h1 className="font-bold md:text-2xl text-[14px] text-m_yellow ">
          {truncateAndAddEllipsis(movie.title, 27)}
        </h1>
        <span className="font-light text-sm  md:block hidden">
          {truncateAndAddEllipsis(movie.overview, 200)}
        </span>

        <span className="font-light text-[12px] md:hidden block">
          {truncateAndAddEllipsis(movie.overview, 175)}
        </span>
      </div>

      <div>
        {movie.poster_path !== null ? (
          <img
            src={w500ImageUrl + movie.poster_path}
            alt={movie.title}
            className="w-[94px] h-[141px] rounded-[4px]"
          />
        ) : (
          <div className="w-[94px] h-[141px] bg-gray-500 flex items-center justify-center rounded-[4px]">
            <BsFilm className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        )}
      </div>
    </Link>
  );
};

export default SearchListItem;
