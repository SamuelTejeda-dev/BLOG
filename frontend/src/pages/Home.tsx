import Carousel from "../components/Carousel/Carousel";
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
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-15 mx-10">
        {[1, 2, 4, 5, 6, 7, 8, 9].map((index) => (
          <div
            key={index}
            className="card w-[25rem] sm:w-full max-w-sm responsive-itemBackground rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="w-full relative">
              <img
                src="https://images.unsplash.com/photo-1640102953836-5651f5d6b240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
                alt="Blog image"
                className="w-full max-h-[15rem] object-cover rounded-3xl"
              />
            </div>
            <h3 className="responsive-text text-2xl font-semibold py-4">
              Learn Microinteraction
            </h3>
            <span className="text-sm responsive-text">Monday Jan 20, 2020</span>
            <p className="responsive-text text-base py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              sagittis viverra turpis, non cursus ex accumsan at.
            </p>
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold responsive-text">
                Read Full Blog
              </span>
              <button className="btn responsive-btn text-darkText font-normal px-4 py-2 rounded-lg">
                Blog
              </button>
            </div>
          </div>
        ))}
      </section>

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

        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="grid grid-cols-3 gap-6 w-full max-w-7xl h-[80vh]">
            {/* Colonna sinistra */}
            <div className="flex flex-col gap-6">
              <div className="bg-gradient-to-b text-darkText  from-lightPurple to-darkPurple rounded-3xl flex-1 p-6 shadow-md">
                <h2 className="text-3xl ">Contact</h2>
                <p className="text-l  mt-4">
                  Spotted a typo, want to contribute, or have a feature idea for
                  the blog?
                  <br />
                  This is your place to speak up. We welcome feedback,
                  suggestions, and collaboration opportunities.
                </p>
              </div>
              <div className="bg-white rounded-3xl flex-1 p-6 shadow-md">
                Box 2
              </div>
            </div>

            {/* Centro */}
            <div
              className="rounded-3xl p-6 shadow-md flex items-center justify-center  h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/SfondoProgrammazione.png')",
              }}
            >
              <p className="text-4xl font-bold">Always Up to Date</p>
            </div>

            {/* Colonna destra */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl flex-1 p-6 shadow-md">
                Box A
              </div>
              <div className="bg-gradient-to-b text-darkText  from-lightPurple to-darkPurple rounded-3xl flex-1 p-6 shadow-md">
                <h2 className="text-3xl   ">About</h2>
                <p className="text-l   mt-4">
                  Every great developer was once a beginner who didn’t give up.
                  <br />
                  Learn more about the author of this blog and his journey as a
                  web developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
