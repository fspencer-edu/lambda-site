import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout.jsx";
import HomePage from "@/pages/HomePage.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);