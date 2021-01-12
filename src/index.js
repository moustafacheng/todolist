import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";

const DATA = [
  { id: "todo-0", name: "Eat", completed: false },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App tasks={DATA} />
  </Suspense>,

  document.getElementById("root")
);
