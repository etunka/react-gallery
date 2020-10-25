import React from "react";


export const ThumbnailImage = ({src, onClick}) => {
  return <img className="thumbnail-img" src={src} onClick={onClick} alt="thumbnail"/>;
};
