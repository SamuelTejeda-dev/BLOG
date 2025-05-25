import useGetPostBySlug from "../hooks/usePost";

const Home = () => {
  const { data, isLoading, error } = useGetPostBySlug("test");
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Errore nel caricamento del post</div>;
  if (!data) return <div>Nessun dato trovato</div>; // fallback di sicurezza

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default Home;
