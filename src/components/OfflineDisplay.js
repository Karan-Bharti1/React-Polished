import React from "react";

function OfflineDisplay() {
  return (
    <div>
      {" "}
      <h1 className="text-center m-5 text-red-500">
        It Looks Like You are Offline <IoCloudOfflineSharp />
      </h1>
      <h2 className="text-center m-5 text-red-500">Please Check your Internet Connection</h2>
    </div>
  );
}

export default OfflineDisplay;
