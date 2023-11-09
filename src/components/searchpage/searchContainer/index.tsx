import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchContainer = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <motion.div
      initial={{ top: "0px" }}
      animate={{ top: searchActive ? "-100px" : "0px" }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center w-full h-[100%] mx-auto text-center text-white z-10 gap-8"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Find Your Movie
      </h1>

      <div className="flex start max-w-[560px] w-[90%] mx-auto border-b-2 focus-within:border-m_yellow focus-within:text-m_yellow items-center py-1">
        <input
          type="text"
          className="flex-1 bg-transparent outline-none px-2 py-1 focus:text-white"
          onClick={() => {
            setSearchActive(true);
          }}
        />
        <FaSearch className="w-5 h-5 md:w-6 md:h-6" />
      </div>
    </motion.div>
  );
};

export default SearchContainer;
