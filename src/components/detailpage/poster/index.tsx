import { BsFilm } from "react-icons/bs";
import { useMovieDetail } from "../../../stores/movie/hooks";
import { w780ImageUrl } from "../../../utils/constants";

interface PosterProps {
  poster_path: string;
  title: string;
}

const Poster = ({ poster_path, title }: PosterProps) => {
  return (
    <>
      {poster_path !== null ? (
        <img
          src={w780ImageUrl + poster_path}
          className="md:w-[400px] md:h-[600px] w-[300px] h-[450px] md:mr-[100px] mb-[20px] md:mb-0 rounded-xl"
          alt={title}
        />
      ) : (
        <div className="md:w-[400px] md:h-[600px] w-[300px] h-[450px] md:mr-[100px] mb-[20px] md:mb-0 rounded-xl bg-gray-500 flex items-center justify-center">
          <BsFilm className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      )}
    </>
  );
};

export default Poster;
