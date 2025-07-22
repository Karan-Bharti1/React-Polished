import React from "react";

function OfflineDisplay() {
  return (
    <div>
      {" "}
      <h1 className="offline-text">
        It Looks Like You are Offline <IoCloudOfflineSharp />
      </h1>
      <h2 className="offline-text">Please Check your Internet Connection</h2>
    </div>
  );
}

export default OfflineDisplay;
