import React from "react";
import { Layout } from "./layout";
import { Outlet } from "react-router-dom";


export const App = () => {
  return (
    <>
      <Layout>
        <Outlet/>
      </Layout>

    </>
  )

}