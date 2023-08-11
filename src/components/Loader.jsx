import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = (props) => {
  return (
    <div className="loader">
      <PropagateLoader color="#3a456a" />
    </div>
  );
};

export default Loader;
