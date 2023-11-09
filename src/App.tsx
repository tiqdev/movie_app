import "./index.css";
import { useError } from "./stores/movie/hooks";

export default function App() {
  const error = useError();

  return (
    <main>
      <h1 className="font-normal text-red-500">{error}</h1>
    </main>
  );
}
