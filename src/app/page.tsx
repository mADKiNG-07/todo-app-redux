"use client";

import Todo from "@/components/todo";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
