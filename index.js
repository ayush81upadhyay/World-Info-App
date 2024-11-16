import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import CountryDetail from "./Components/CountryDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/:country',
                element: <CountryDetail />
            }
        ]
    }
], {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true
    }
  })

root = createRoot(document.getElementById("root"));
root.render(<RouterProvider future={{
    v7_startTransition: true,
  }} router={router}/>);