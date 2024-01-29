import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { JobsContext } from "./contexts/JobsContext";
import { StatusContext } from "./contexts/StatusContext";
import { UserContext } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StatusContext>
        <UserContext>
          <JobsContext>
            <App />
          </JobsContext>
        </UserContext>
      </StatusContext>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
