import { useEffect } from "react";
import { useParams } from "react-router";
import { getMovieDetail } from "../../stores/movie/actions";
import { useIsLoading, useMovieDetail } from "../../stores/movie/hooks";
import Loading from "../../components/common/loading";
import {
  originalImageUrl,
  w1280ImageUrl,
  w780ImageUrl,
} from "../../utils/constants";
import { Genre } from "../../models/MovieDetail";
import { BsFilm } from "react-icons/bs";
import { toHoursAndMinutes } from "../../utils/functions";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const movieDetail = useMovieDetail();
  const isLoading = useIsLoading();

  console.log(id);
  console.log(movieDetail);

  useEffect(() => {
    if (id) {
      getMovieDetail(Number(id));
    } else {
      console.log("No id");
    }
  }, [id]);

  return (
    <div className="mt-[100px] w-full">
      {isLoading && <Loading />}

      {!isLoading && movieDetail && (
        <>
          <div className="py-12 relative overflow-hidden">
            <div className="absolute inset-0 z-10 bg-m_black  h-full overflow-hidden flex justify-start">
              {movieDetail.backdrop_path !== null && (
                <img
                  src={originalImageUrl + movieDetail.backdrop_path}
                  className="w-full h-full object-cover filter opacity-10 place-content-start"
                  alt=""
                />
              )}
            </div>

            <div className="px-4 w-full max-w-[1280px] mx-auto flex md:flex-row flex-col items-center justify-between relative z-20">
              {movieDetail.poster_path !== null ? (
                <img
                  src={w780ImageUrl + movieDetail?.poster_path}
                  className="md:w-[400px] md:h-[600px] w-[300px] h-[450px] md:mr-[100px] mb-[20px] md:mb-0 rounded-xl"
                  alt={movieDetail?.title}
                />
              ) : (
                <div className="md:w-[400px] md:h-[600px] w-[300px] h-[450px] md:mr-[100px] mb-[20px] md:mb-0 rounded-xl bg-gray-500 flex items-center justify-center">
                  <BsFilm className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              )}

              <div className="flex flex-col md:gap-6 gap-4 flex-1 md:items-start items-center justify-center">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-m_yellow">
                  {movieDetail?.title} (
                  {new Date(movieDetail?.release_date).getFullYear()})
                </h1>

                <div className="flex flex-row flex-wrap gap-3">
                  {movieDetail?.genres.map((genre: Genre) => (
                    <span
                      key={genre.id.toString()}
                      className="text-light md:text-sm text-[12px] text-m_yellow tracking-wide leading-3 bg-m_brown px-2 py-1 rounded-md"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-row gap-4">
                  <span>
                    Runtime : {toHoursAndMinutes(movieDetail?.runtime)}
                  </span>
                  <span>User Score : {movieDetail?.vote_average} / 10</span>
                </div>

                <h2 className="text-xl md:text-2xl font-medium text-center text-m_yellow mt-4">
                  Overview
                </h2>
                <span className="text-light md:text-sm text-[12px] tracking-wide leading-3 md:text-start text-center">
                  {movieDetail?.overview}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row max-w-[1280px] w-full mx-auto py-12 px-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            explicabo, nesciunt magni iure ut expedita nostrum libero tenetur
            perspiciatis quibusdam repudiandae? Velit architecto quibusdam et
            reprehenderit? Id, sed. Voluptatibus, tenetur? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Ipsum explicabo, nesciunt
            magni iure ut expedita nostrum libero tenetur perspiciatis quibusdam
            repudiandae? Velit architecto quibusdam et reprehenderit? Id, sed.
            Voluptatibus, tenetur? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsum explicabo, nesciunt magni iure ut expedita
            nostrum libero tenetur perspiciatis quibusdam repudiandae? Velit
            architecto quibusdam et reprehenderit? Id, sed. Voluptatibus,
            tenetur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ipsum explicabo, nesciunt magni iure ut expedita nostrum libero
            tenetur perspiciatis quibusdam repudiandae? Velit architecto
            quibusdam et reprehenderit? Id, sed. Voluptatibus, tenetur? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo,
            nesciunt magni iure ut expedita nostrum libero tenetur perspiciatis
            quibusdam repudiandae? Velit architecto quibusdam et reprehenderit?
            Id, sed. Voluptatibus, tenetur? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ipsum explicabo, nesciunt magni iure
            ut expedita nostrum libero tenetur perspiciatis quibusdam
            repudiandae? Velit architecto quibusdam et reprehenderit? Id, sed.
            Voluptatibus, tenetur? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsum explicabo, nesciunt magni iure ut expedita
            nostrum libero tenetur perspiciatis quibusdam repudiandae? Velit
            architecto quibusdam et reprehenderit? Id, sed. Voluptatibus,
            tenetur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ipsum explicabo, nesciunt magni iure ut expedita nostrum libero
            tenetur perspiciatis quibusdam repudiandae? Velit architecto
            quibusdam et reprehenderit? Id, sed. Voluptatibus, tenetur? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo,
            nesciunt magni iure ut expedita nostrum libero tenetur perspiciatis
            quibusdam repudiandae? Velit architecto quibusdam et reprehenderit?
            Id, sed. Voluptatibus, tenetur?
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
