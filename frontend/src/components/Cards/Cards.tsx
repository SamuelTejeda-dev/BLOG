import { useGetPosts } from "../../hooks/usePost";

const Cards = () => {
  const { data: post } = useGetPosts();
  console.log(post[0]);
  return (
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
          <h3 className="responsive-text text-2xl font-semibold py-4"></h3>
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
  );
};

export default Cards;
