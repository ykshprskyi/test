import React from "react";
import "./errorPage.scss";

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>This page does not exist, go to </h1>
      <a href="/">Home page</a>
    </div>
  );
};
