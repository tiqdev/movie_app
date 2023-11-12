import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  if (!isVisible) {
    return false;
  }

  return (
    <div
      className="fixed right-[40px] bottom-[40px] z-20 h-10 w-10 rounded-full bg-m_yellow flex justify-center items-center cursor-pointer shadow-xl"
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp className="text-m_black w-6 h-6" />
    </div>
  );
};

export default ScrollToTop;
