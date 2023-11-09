import { useSelector } from "react-redux";
import "./index.css";

export default function App() {
  const error = useSelector((state: any) => state.movie.error);

  return (
    <main>
      <h1 className="font-normal text-red-500">{error}</h1>
      <h1 className="font-normal text-red-500 font-mono">App</h1>
    </main>
  );
}
