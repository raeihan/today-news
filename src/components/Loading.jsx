import React from "react";
import { Discuss } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-zinc-900">
      <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="discuss-loading"
        wrapperClass="discuss-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
};

export default Loading;
