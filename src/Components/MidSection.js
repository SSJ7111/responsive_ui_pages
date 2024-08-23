import React from "react";
import Subscription from "./Subscription";
import Cards from "./Cards";
import MobSubscription from "./MobSubscription";
import { useMediaQuery } from 'react-responsive';

const MidSection = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="container bg-gray py-5">
      <div className="row">
        <div className="col-lg-6 col-12 mb-4 mb-lg-0">
          {isDesktopOrLaptop && <Subscription />}
          {isMobile && <MobSubscription />}
        </div>
        <div className="col-lg-6 col-12">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default MidSection;
