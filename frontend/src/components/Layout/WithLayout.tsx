import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

export default function WithLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
