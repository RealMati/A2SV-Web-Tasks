"use client";
import React from "react";

import { Provider } from "react-redux";
import store from "@/app/store";
import Desc from "./desc";

const desc = () => {

  // console.log(1)
  // console.log(jobs[idx])
  return (
    <Provider store={store}>
      <Desc />
    </Provider>
  );
};

export default desc;
