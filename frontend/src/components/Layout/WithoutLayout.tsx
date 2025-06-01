import { Outlet } from "react-router-dom";

export default function WithoutLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
