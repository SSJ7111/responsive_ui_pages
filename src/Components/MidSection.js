import React from "react";
import Subscription from "./Subscription";
import Cards from "./Cards";

const MidSection = () => {
  return (
    <div className="container bg-gray py-4">
      <div className="row">
        <div className="col-lg-6 col-12 mb-4 mb-lg-0">
          <Subscription />
        </div>
        <div className="col-lg-6 col-12">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default MidSection;
