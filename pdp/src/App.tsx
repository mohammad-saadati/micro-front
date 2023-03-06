import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import Footer from "micro_frontend/Footer";
const Footer = React.lazy(() => import("micro_frontend/Footer"));
// import Header from "micro_frontend/Header";
const Header = React.lazy(() => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        1 ? resolve(import("micro_frontend/Header")) : reject("sth went wrong"),
      5000
    )
  );
});

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: pdp</div>
    <Suspense fallback={<div>loading ...</div>}>
      <Header />
      <Footer />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
