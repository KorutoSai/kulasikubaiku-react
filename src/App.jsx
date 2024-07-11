import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainContent from "./pages/MainContent";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import ContentTriumph from "./pages/ContentTriumph";
import ContentEnfield from "./pages/ContentEnfield";
import ContentKawasaki from "./pages/ContentKawasaki";
import ContentYamaha from "./pages/ContentYamaha";
import ContentSuperior from "./pages/ContentSuperior";
import ContentTourMindoro from "./pages/ContentTourMindoro";
import ContentTourFuji from "./pages/ContentTourFuji";
import ContentFaq from "./pages/ContentFaq";
import ContentAbout from "./pages/ContentAbout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainContent /> },
      { path: "/triumph", element: <ContentTriumph /> },
      { path: "/enfield", element: <ContentEnfield /> },
      { path: "/kawasaki", element: <ContentKawasaki /> },
      { path: "/yamaha", element: <ContentYamaha /> },
      { path: "/superior", element: <ContentSuperior /> },
      { path: "/tourMindoro", element: <ContentTourMindoro /> },
      { path: "/tourFuji", element: <ContentTourFuji /> },
      { path: "/faq", element: <ContentFaq /> },
      { path: "/about", element: <ContentAbout /> },
      // { path: "/second/:optionId", element: <Options/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
