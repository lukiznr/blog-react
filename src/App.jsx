import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";
export default function App() {
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <nav>
        <header>
          <h1>Luki Article</h1>
        </header>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
