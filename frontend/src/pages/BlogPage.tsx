import { useParams } from "react-router-dom";
import { useGetPostBySlug } from "../hooks/usePost";
import { formatDate } from "../utils/date";

const BlogPage = () => {
  const { slug } = useParams(); // ottieni l'id dalla URL (/blog/47)
  const { data: post, error, isSuccess } = useGetPostBySlug(slug || "");

  if (!isSuccess) {
    return <div>ciao</div>;
  }

  return (
    <main>
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center mt-[-40px]"
        style={{
          backgroundImage: "url('/SfondoProva.png')",
        }}
      ></section>
      <div className="relative mx-30 mt-[-30rem] responsive-background p-20 rounded-lg responsive-text">
        <p className="text-2xl pb-4">CATEGORY: {post.themes}</p>
        <h1 className="text-3xl sm:text-5xl font-bold">{post.title}</h1>
        <div className="flex justify-between italic py-4 text-xl">
          <p>Written by {post.author}</p>
          <p>{formatDate(post.createdAt)}</p>
        </div>
        <p className="font-bold text-xl py-10">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>

        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
        <p className="font-bold text-xl">{post.description}</p>
      </div>
    </main>
  );
};

export default BlogPage;
