import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const WebLayout = () => {
  return (
    <div className="max-w-[1280px] h-screen w-full mx-auto flex flex-col p-5">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default WebLayout;
