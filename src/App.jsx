import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./layouts/Layout";
import ParamProvider from "./contexts/ParamContext";

import React from "react";
import { Suspense } from "react";
import Spinner from "./ui/Spinner";

// Lazy-load pages
const LazyAboutMe = React.lazy(() => import("./pages/about/AboutMe"));
const LazyResume = React.lazy(() => import("./pages/resume/Resume"));
const LazyPortfolio = React.lazy(() => import("./pages/portfolio/Portfolio"));
const LazyProjectReview = React.lazy(() =>
  import("./pages/portfolio/ProjectReview")
);
const LazyContactPage = React.lazy(() => import("./pages/contact/ContacPage"));

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Spinner />}>
              <LazyAboutMe />
            </Suspense>
          ),
        },
        {
          path: "resume",
          element: (
            <Suspense fallback={<Spinner />}>
              <LazyResume />
            </Suspense>
          ),
        },

        {
          path: "portfolio",
          element: (
            <Suspense fallback={<Spinner />}>
              <LazyPortfolio />
            </Suspense>
          ),
        },

        {
          path: "project/:id/review",
          element: (
            <Suspense fallback={<Spinner />}>
              <LazyProjectReview />
            </Suspense>
          ),
        },

        {
          path: "contact",
          element: (
            <Suspense fallback={<Spinner />}>
              <LazyContactPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ParamProvider>
          <RouterProvider router={router} />
        </ParamProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
