import React from "react";

import { ListOfCategories } from "./components/listOfCategories";
import { ListOfPhotoCards } from "./components/listOfPhotoCards";
import { Logo } from "./components/logo";
import { GlobalStyle } from "./components/styles/globalStyles";

const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);

export default App;
