import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! La pagina che stai cercando non esiste.
      </p>
      <Link to="/" className="text-lightPurple underline">
        Torna alla home
      </Link>
    </main>
  );
};

export default NotFoundPage;
