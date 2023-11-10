import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Div100vh from "react-div-100vh";

const WebLayout = () => {
  return (
    <Div100vh className="w-full mx-auto flex flex-col p-5 relative">
      <Header />
      <main className="absolute top-0 left-0 w-full h-full">
        <Outlet />
      </main>
    </Div100vh>
  );
};

export default WebLayout;
