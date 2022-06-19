import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "React Js",
  "Angular Js",
  "React Native",
  "Use of API",
  "Redux",
  "Music",
  "Algorithm art",
  "Guitar",
  "Cricket",
  "Sports",
  "Football",
  "Coding",
  "Hockey",
  "Power Star Pawan Kalyan",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, index) => (
        <span key={index} onClick={() => handleClick(value)}
          className={activeElement === value? 'active': ''}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
