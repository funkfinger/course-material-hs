import React from "react";
import { Layout } from "../components/layout";
import { MyHead } from "../components/my_head";

const IndexPage = () => (
  <>
    <h1>GOT HERE</h1>
    <Layout></Layout>
  </>
);

export default IndexPage;

export const Head = () => <MyHead />;
