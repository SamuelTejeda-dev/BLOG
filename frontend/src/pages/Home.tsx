import { Link } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Cards from "../components/Cards/Cards";
const Home = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center mt-[-40px]"
        style={{
          backgroundImage: "url('/SfondoProva.png')",
        }}
      >
        {/* Testo sopra i blocchi */}
        <div className="text-darkText text-center  my-40">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold ">
            The art of code
          </h1>
          <p className="text-2xl ">
            A blog for developers who never stop learning.
          </p>
        </div>
        <div className="min-h-[30vh] w-full max-w-7xl ">
          <Carousel />
        </div>
      </section>

      {/* filter section */}
      <section className="mt-4">
        <div className="flex justify-center">
          <p className="text-xl  text-darkText dark:text-lightText m-4">
            Filters
          </p>
        </div>
        <form className="flex justify-center flex-wrap gap-4 m-4 ">
          {[
            "Angular",
            "Express",
            "React",
            "Next.js",
            "DevOps",
            "Backend",
            "Frontend",
          ].map((label) => (
            <label key={label} className="cursor-pointer">
              <input
                type="checkbox"
                name="frameworks"
                className="peer hidden "
                aria-label={label}
              />
              <span className="btn peer-checked:bg-darkPurple bg-lightPurple text-darkText rounded-2xl border-0 hover:bg-darkPurple transition">
                {label}
              </span>
            </label>
          ))}

          <input
            className="btn peer-checked:bg-darkPurple bg-lightPurple text-darkText rounded-2xl border-0 hover:bg-darkPurple transition"
            type="reset"
            value="X"
          />
        </form>
      </section>
      {/* cards section */}
      <Cards />

      <section className="mt-15">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-darkText dark:text-lightText m-4">
            Don't stop here!
          </h2>
          <p className="text-l text-darkText dark:text-lightText text-center">
            Did you find something interesting? Keep exploring,
            <br /> there is much more to discover down here.
          </p>
        </div>

        <div className="min-h-screen flex items-center justify-center p-6 ">
          <div className="grid grid-cols-2 md:grid-cols-3 sm gap-6 w-full max-w-7xl h-[80vh]">
            {/* Colonna sinistra */}
            <div className="flex flex-col gap-6">
              <Link
                to="/contact"
                className="bg-gradient-to-b text-darkText  from-lightPurple to-darkPurple rounded-3xl flex-1 p-6 shadow-md"
              >
                <h2 className="text-3xl ">Contact</h2>
                <p className="text-l  mt-4">
                  Spotted a typo, want to contribute, or have a feature idea for
                  the blog?
                  <br />
                  This is your place to speak up. We welcome feedback,
                  suggestions, and collaboration opportunities.
                </p>
              </Link>
              <div
                className="relative rounded-3xl h-64 flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('/Codice.jpg')",
                }}
              >
                {/* Contenitore sfocato */}
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-2 z-10 text-center">
                  {/* <h2 className=" text-2xl sm:text-3xl font-bold text-darkText">
                    Not just programming
                  </h2> */}
                </div>
              </div>
            </div>

            {/* Centro */}
            <div
              className="hidden md:flex rounded-3xl p-6 shadow-md  items-center justify-center  h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/SfondoProgrammazione.png')",
              }}
            >
              <p className="text-4xl font-bold ">Always Up to Date</p>
            </div>

            {/* Colonna destra */}
            <div className="flex flex-col gap-6 items-cente">
              <div
                className="relative rounded-3xl h-64 flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('/Router.jpg')",
                }}
              ></div>
              <Link
                to="/about"
                className="bg-gradient-to-b text-darkText  from-lightPurple to-darkPurple rounded-3xl flex-1 p-6 shadow-md"
              >
                <h2 className="text-3xl   ">About</h2>
                <p className="text-l   mt-4">
                  Every great developer was once a beginner who didn’t give up.
                  <br />
                  Learn more about the author of this blog and his journey as a
                  web developer.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
