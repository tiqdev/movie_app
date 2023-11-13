import { motion } from "framer-motion";
import { setDropdownIsActive } from "../../../stores/movie/actions";

const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      onClick={() => {
        setDropdownIsActive(false);
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatePage;
