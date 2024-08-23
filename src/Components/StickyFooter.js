import React from "react";

const StickyFooter = () => {
  return (
    <div
      className="container-fluid fixed-bottom text-center p-4"
      style={{
        backgroundColor: "rgba(12, 12, 12, 0.5)", // Semi-transparent black background
        backdropFilter: "blur(10px)", // Apply blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari support
      }}
    >
      <button className="btn btn-danger btn-block btn-mobile w-75 btn-lg">
        Get started <span className="ml-2">→</span>
      </button>
      <p className="mt-2 text-mobile">
        Marcus MVP is only available for use in our Mobile App.
      </p>
    </div>
  );
};

export default StickyFooter;
