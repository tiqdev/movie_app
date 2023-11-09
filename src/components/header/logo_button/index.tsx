import { Link } from "react-router-dom";

export const LogoButton = () => {
  return (
    <Link to="/" className="text-white text-[24px]">
      movie<span className="text-m_yellow">.app</span>
    </Link>
  );
};

export default LogoButton;
