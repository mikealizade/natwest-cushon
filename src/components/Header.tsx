import React from "react";

export const Header = (): JSX.Element => {
  return (
    <header className="bg-primary text-white font-bold p-8 text-lg flex items-center gap-x-1">
      <img alt="NAtwest cushon logo" src="./cushon_logo.jpeg" width="50px" />
      <h1>Natwest cushon</h1>
    </header>
  );
};
