import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const apicall = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
    };

    apicall().then((res) => console.log(res));
    console.log("after api call");
  }, []);

  return (
    <>
      <div className="">footer from microfrontend</div>
      <div>Footer changed</div>
    </>
  );
}
