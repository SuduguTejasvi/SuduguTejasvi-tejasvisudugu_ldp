import React from "react";
import { Button, Box } from "@mui/material";
import { CustomHeader } from "./index.styles";

interface NavHeaderProps {
  handleHome: () => void;
  handleAbout: () => void;
  handleContact: () => void;
  hlabel: string;
  alabel: string;
  clabel: string;
}

const NavHeader: React.FC<NavHeaderProps> = ({ handleHome, handleAbout, handleContact, hlabel, alabel, clabel }) => {
  return (
    <CustomHeader>
      <Button onClick={handleHome}>{hlabel}</Button>
      <Button onClick={handleAbout}>{alabel}</Button>
      <Button onClick={handleContact}>{clabel}</Button>
    </CustomHeader>
  );
};

export default NavHeader;
