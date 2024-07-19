import React from "react";
import { Button, Box } from "@mui/material";
import { CustomHeader } from "./index.styles";

interface NavHeaderProps {
  displayHomePage: () => void;
  displayAboutPage: () => void;
  displayContactPage: () => void;
  homePageLabel: string;
  aboutPageLabel: string;
  contactPageLabel: string;
}

const NavHeader: React.FC<NavHeaderProps> = ({ displayHomePage, displayAboutPage, displayContactPage, homePageLabel,aboutPageLabel, contactPageLabel}) => {
  return (
    <CustomHeader>
      <Button onClick={displayHomePage}>{homePageLabel}</Button>
      <Button onClick={displayAboutPage}>{aboutPageLabel}</Button>
      <Button onClick={displayContactPage}>{contactPageLabel}</Button>
    </CustomHeader>
  );
};

export default NavHeader;
