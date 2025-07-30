import React from "react";

function OfflineDisplay() {
  return (
    <div>
      {" "}
      <h1 className="text-center m-5 text-red-500 text-2xl font-semibold">
        It Looks Like You are Offline 
      </h1>
      <h2 className="text-center m-5 text-red-500 text-3xl font-bold">Please Check your Internet Connection</h2>
    </div>
  );
}

export default OfflineDisplay;
