import React from "react";
import { Layout } from "./layout";


export const App = (props) => {
  return (
    <>
      <Layout>
        {props.children}
      </Layout>

    </>
  )

}