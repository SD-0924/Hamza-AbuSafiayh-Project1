import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Homepage } from "./pages/homepage";
import { Details } from "./pages/details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Homepage />
      </Layout>
    ),
  },
  {
    path: "/details/:id",
    element: (
      <Layout>
        <Details />
      </Layout>
    ),
  },
]);
