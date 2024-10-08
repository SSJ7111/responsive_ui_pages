import React from "react";
import star1 from "../Assets/Images/teenyicons_star-solid-1.svg";
import star3 from "../Assets/Images/teenyicons_star-solid.svg";

const MobSubscription = () => {
  return (
    <div className="subscription-container bg-gray text-white p-4 rounded">
      <h5 className="subscription-title">
        <span className="mx-1">
          <img src={star1} alt="Subscription" className="img-fluid" />
        </span>
        Reel Deal Monthly Movies
        <span className="mx-1">
          <img src={star3} alt="Subscription" className="img-fluid" />
        </span>
      </h5>
      <p className="subscription-sub-text">
        Your flexible monthly membership to the latest movies
      </p>
      <hr className="border-light" />
      <h5 className="subscription-sub-title mb-3">What is MVP Subscription?</h5>
      <div className="accordion-with-lines">
        <div className="accordion-item d-flex align-items-start">
          <div className="number-container">
            <span className="number">1</span>
            <div className="vertical-line"></div>
          </div>
          <p className="content subscription-text">
            MVP Subscription provides the member 1 movie credit per month
          </p>
        </div>
        <div className="accordion-item d-flex align-items-start">
          <div className="number-container">
            <span className="number">2</span>
            <div className="vertical-line"></div>
          </div>
          <p className="content subscription-text">
            They can avail it at any Marcus theatre or Movie Tavern
          </p>
        </div>
        <div className="accordion-item d-flex align-items-start">
          <div className="number-container">
            <span className="number">3</span>
          </div>
          <p className="content subscription-text">
            Members earn 100 points and get a {`\u0024`} 5 reward redeemable on
            food {`\u0026`}
            beverages {`\u002B`} many more benefits
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobSubscription;
