import React from "react";

const Header = ({name}) => {
  return (
    <>
      <div>{name}: header from microfrontend</div>
      <div>header is changed</div>
    </>
  );
};

export default Header;
