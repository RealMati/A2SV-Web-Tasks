'use client';
import Image from "next/image";
import Card from "./card";

import { Provider } from "react-redux";
import { store } from "./store";
import { useGetAllJobsQuery } from "./features/api/apiSlice";
import Main from "./main";


export default function Home() {
 
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
