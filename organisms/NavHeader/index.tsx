import React from "react";
import NavHeader from "../../molecules/Header";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  
  const handleHome = () => {
    navigate("/");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <NavHeader 
      handleHome={handleHome} 
      handleAbout={handleAbout} 
      handleContact={handleContact} 
      hlabel="Home" 
      alabel="About" 
      clabel="Contact us" 
    />
  );
}
