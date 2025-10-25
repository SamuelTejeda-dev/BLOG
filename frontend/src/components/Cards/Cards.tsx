import { Link } from "react-router-dom";
import { useGetPosts } from "../../hooks/usePost";
import type { post } from "../../types/postType";
import { formatDate } from "../../utils/date";
const Cards = () => {
  const { data: post, error, isLoading } = useGetPosts();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-15 mx-10">
      {post?.map((post: post) => (
        <div
          key={post.id}
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
            {post.title}
          </h3>
          <span className="text-sm responsive-text">
            {formatDate(post.createdAt)}
          </span>
          <p className="responsive-text text-base py-4">{post.description}</p>
          <div className="flex items-center justify-between text-base">
            <span className="font-semibold responsive-text">
              Read Full Blog
            </span>
            <Link to={`/article/${post.slug}`}>
              <button className="btn responsive-btn text-darkText font-normal px-4 py-2 rounded-lg">
                Blog
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
