const Home = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center mt-[-40px]"
        style={{
          backgroundImage: "url('/SfondoProva.png')",
        }}
      >
        <div className="flex flex-row gap-20 items-end ">
          {/* Primo blocco a sinistra */}
          <div className="bg-black h-140 w-90 rounded-xl p-4 text-white">
            <h2 className="text-xl font-bold">Titolo Sinistra</h2>
            <p>Contenuto blocco grande</p>
          </div>

          {/* Colonna a destra */}
          <div className="flex flex-col gap-6">
            {/* Testo sopra i blocchi */}
            <div className="text-lightText dark:text-darkText mb-5">
              <h1 className="text-6xl font-bold ">The art of code</h1>
              <p className="text-2xl ">
                A blog for developers who never stop learning.
              </p>
            </div>

            {/* Tre blocchi affiancati */}
            <div>
              <p className="text-xl font-semibold text-lightText dark:text-darkText pr-4 mb-2">
                Most popular articles:
              </p>
              <div className="flex flex-row gap-6">
                <div className="bg-black h-84 w-54 rounded-xl p-4 text-white">
                  <h3 className="text-lg font-semibold">Blocco 1</h3>
                  <p>Testo</p>
                </div>
                <div className="bg-black h-84 w-54 rounded-xl p-4 text-white">
                  <h3 className="text-lg font-semibold">Blocco 2</h3>
                  <p>Testo</p>
                </div>
                <div className="bg-black h-84 w-54 rounded-xl p-4 text-white">
                  <h3 className="text-lg font-semibold">Blocco 3</h3>
                  <p>Testo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
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
      <section>
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
              <div className="bg-gradient-to-b from-lightPurple to-darkPurple rounded-3xl flex-1 p-6 shadow-md">
                <h2 className="text-3xl text-darkText ">Contact</h2>
                <p className="text-l text-darkText mt-4">
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
              <div className="bg-gradient-to-b from-lightPurple to-darkPurple rounded-3xl flex-1 p-6 shadow-md">
                <h2 className="text-3xl text-darkText ">About</h2>
                <p className="text-l text-darkText mt-4">
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
