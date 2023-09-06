import FormHome from "../ui/FormHome";

function Home() {
  return (
    <>
      <div className="sm:text-3xl flex flex-col gap-6 justify-center text-center items-center">
        <h1 className="flex text-2xl p-0 text-amber-400  justify-center items-center font-normal sm:font-semibold sm:p-9 ">
          WELLCOME IN FALCON RESTAURANT
        </h1>
        <h3 className="text-xl px-20 textt-amber-400 sm:text-2lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos
          repellat nemo veritatis, est delectus ea vel enim aspernatur, libero
          atque non eius quos iusto beatae consequuntur eaque accusamus quo.
        </h3>
        <div className="text-amber-200  font-normal md:text-xl text-base ">
          WE ARE A BIGGEST RESTAURANT IN MIDDLE EAST
        </div>
        <div>
          <FormHome />
        </div>
      </div>
    </>
  );
}

export default Home;
