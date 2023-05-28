import { Outlet } from "react-router-dom";
export default function App() {
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
