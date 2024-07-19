import React from "react";
import NavHeader from "../../molecules/Header";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  
  const displayHomePage = () => {
    navigate("/");
  };

  const displayAboutPage = () => {
    navigate("/about");
  };

  const displayContactPage = () => {
    navigate("/contact");
  };

  return (
    <NavHeader 
      handleHome={displayHomePage} 
      handleAbout={displayAboutPage} 
      handleContact={displayContactPage} 
      homePageLabel="Home" 
      aboutPageLabel="About" 
      contactPageLabel="Contact us" 
    />
  );
}
