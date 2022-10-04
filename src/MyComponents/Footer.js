import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
  };
  return (
    <div className="bg-dark text-light mt-3" style={footerStyle}>
      <p className="text-center py-1 m-0">Copyright &copy MyTodosList.com</p>
    </div>
  );
};
