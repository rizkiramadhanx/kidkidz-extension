import React from "react";
import Body from "../components/Body";
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="flex w-[350px] flex-col justify-center bg-slate-500">
      <Header />
      <Body />
    </div>
  );
};

export default Main;
