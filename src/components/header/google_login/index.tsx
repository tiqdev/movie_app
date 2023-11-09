import { BsGoogle } from "react-icons/bs";

const GoogleLogin = () => {
  return (
    <>
      <button className="flex h-8 px-2 md:pr-3 gap-2 bg-m_yellow text-m_black items-center justify-start rounded-md hover:bg-m_brown hover:text-m_yellow transition-colors">
        <BsGoogle className="m_black" />
        <span className="hidden md:block text-[14px]">Sign in with Google</span>
      </button>
    </>
  );
};

export default GoogleLogin;
