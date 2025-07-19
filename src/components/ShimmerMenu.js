import React from "react";


const ShimmerMenu = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-header shimmer-box" />
      <div className="shimmer-offer shimmer-box" />
      <div className="shimmer-search shimmer-box" />

      {[1, 2, 3,4,5].map((_, i) => (
        <div className="shimmer-dish" key={i}>
          <div className="shimmer-dish-info">
            <div className="shimmer-title shimmer-box" />
            <div className="shimmer-sub shimmer-box" />
          </div>
          <div className="shimmer-image shimmer-box" />
        </div>
      ))}
    </div>
  );
};

export default ShimmerMenu;
