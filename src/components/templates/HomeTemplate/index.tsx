import React from "react";

interface SimpleTemplateProps {
	children:  React.ReactNode;
  }
const SimpleTemplate = ({ children }:SimpleTemplateProps) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "16px",
  };

  return <div style={styles}>{children}</div>;
};

export default SimpleTemplate;
