import React from "react";
import ReactDOM from "react-dom";
import Footer from "micro_frontend/Footer";
import Header from "micro_frontend/Header";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: pdp</div>
    <Header />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
