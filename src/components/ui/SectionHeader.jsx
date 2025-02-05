import BumpyTextAnim from "../text anim/BumpyTextAnim";
import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-primary-text text-center pb-10">
      <BumpyTextAnim text={title} className="text-4xl font-bold" />
      <p className="text-secondary-text">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
