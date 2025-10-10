import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { Products } from "./view/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "",
          element: <p>Homepage</p>,
        },
        { path: "/produits", element: <Products/> },
        { path: "/produits/:id", element: <p>détails products</p> },
        { path: "*", element: <p>page 404 (not found)</p> },
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <NavBar />
        {/* outlet sera 'remplacé' par le composant associé à la route enfant */}
        <Outlet />
        <>footer</>
      </>
    );
  }

  function ErrorElement() {
    return <div>Oops ! Quelque chose s'est mal passé !</div>;
  }

  return <RouterProvider router={router} />;
}

export default App;
