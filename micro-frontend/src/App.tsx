import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

import "./index.scss";

const App = () => (
  <div className="relative mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: micro-frontend</div>
    <Header />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
