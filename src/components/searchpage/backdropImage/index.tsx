type BackdropImageProps = {
  image: string | null | undefined;
  title: string | null | undefined;
};

const BackdropImage = ({ image, title }: BackdropImageProps) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[100%] z-10 bg-overlay_pattern_dark_bottom opacity-100">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 w-[90%]">
          <h1 className="text-[12px] md:text-[14px] font-light text-white opacity-100 text-center">
            {title}
          </h1>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-[100%] bg-cover bg-no-repeat z-0 opacity-50"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPositionX: "center",
          backgroundPositionY: "start",
        }}
      ></div>
    </>
  );
};

export default BackdropImage;
