import React from "react";
import Header from "../../components/header/header.component";
import FetchField from "../../components/fetch-field/fetch-field.component";
import { laudos } from "../../db";

const Homepage = () => (
  <div>
    <Header />
    <FetchField data={laudos} />
  </div>
);

export default Homepage;
