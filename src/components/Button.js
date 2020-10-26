import React from "react";

export const Button = ({buttonClass, children, onClick} ) => {
  return <button className={buttonClass} onClick={onClick} >{children}</button>
};
