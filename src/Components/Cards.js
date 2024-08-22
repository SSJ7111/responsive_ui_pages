import React from "react";
import img1 from "../Assets/Images/creditPerMonth.svg";
import img2 from "../Assets/Images/rolloverOfUnusedCredits.svg";
import img3 from "../Assets/Images/MMRPerks.svg";
import img4 from "../Assets/Images/100Flexible.svg";
import img5 from "../Assets/Images/discountOnFoodAndBeverages.svg";
import img6 from "../Assets/Images/convenienceFee.svg";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container text-white">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-lg-3 col-md-4 col-sm-4">
          <div className="card shadow p-2">
            <img
              src={img1}
              style={{ width: "45px", height: "45px" }}
              className="card-img-top card-img-custom ms-2"
              alt="Credit per month"
            />
            <div className="card-body">
              <h6 className="card-title img-text">1 Credit per month</h6>
              <p className="card-text img-p">
                One 2D standard movie per month<sup>1</sup>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="card shadow p-2">
            <img
              src={img2}
              style={{ width: "50px", height: "50px" }}
              className="card-img-top card-img-custom ms-2"
              alt="Rollover of Unused Credits"
            />
            <div className="card-body">
              <h6 className="card-title img-text">
                Free rollover of unused credits
              </h6>
              <p className="card-text img-p">
                Unused credits will be combined the following month
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="card shadow p-2">
            <img
              src={img3}
              style={{ width: "45px", height: "45px" }}
              className="card-img-top card-img-custom ms-2"
              alt="MMR Perks"
            />
            <div className="card-body">
              <h6 className="card-title img-text">All MMR perks included</h6>
              <p className="card-text img-p">+ benefits</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="card shadow p-2">
            <img
              src={img4}
              style={{ width: "45px", height: "45px" }}
              className="card-img-top card-img-custom ms-2"
              alt="100% Flexible"
            />
            <div className="card-body">
              <h6 className="card-title img-text">100% Flexible</h6>
              <p className="card-text img-p">
                Cancel anytime<sup>2</sup>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="card shadow p-2">
            <img
              src={img5}
              style={{ width: "40px", height: "40px" }}
              className="card-img-top card-img-custom ms-2"
              alt="Discount on Food and Beverages"
            />
            <div className="card-body">
              <h6 className="card-title img-text">
                20% Discount on all Food and Beverages
              </h6>
              <p className="card-text img-p">Excluding alcohol</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-4">
          <div className="card shadow p-2">
            <img
              src={img6}
              style={{ width: "45px", height: "45px" }}
              className="card-img-top card-img-custom ms-2"
              alt="Convenience Fee"
            />
            <div className="card-body">
              <h6 className="card-title img-text">0 Convenience Fees</h6>
              <p className="card-text img-p">
                Waived on all days on any tickets purchase
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row py-4 text-wrap"
        style={{ maxWidth: "600px"}}
      >
        <p className="img-sub-p text-wrap">
          <sup>1</sup>Excludes IMAX and DBOX formats. No fees apply to Passport
          Credits only. Other fees apply to full-priced tickets.
        </p>
        <p className="img-sub-p mt-0">
          <sup>2</sup>Excludes alcoholic beverages.
        </p>
      </div>
    </div>
  );
};

export default Cards;
