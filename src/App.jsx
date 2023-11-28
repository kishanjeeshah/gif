import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="background w-full h-screen flex flex-col items-center ">

      <h1 className="bg-white p-3 font-bold text-3xl m-10 w-10/12 rounded-lg text-center ">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center">

        <Random/>
        <Tag/>

      </div>

    </div>
  );
}
