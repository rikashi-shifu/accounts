"use client";
import React, { useState } from "react";

interface HeaderButtonProps {
  onClick: () => void;
  content: string;
  dark?: true;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  onClick,
  content,
  dark,
}) => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={onClick}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`${
        dark
          ? `${
              active
                ? "bg-[#c8a1d6] hover:bg-[#b38bc3]"
                : "bg-black hover:bg-[#2c2c2c]"
            } text-white`
          : `${active && "border"} bg-[#eaeaea] hover:bg-[#dddddd]`
      } rounded-lg h-12 w-24 text-sm border-neutral-400`}
    >
      {content}
    </button>
  );
};

export default HeaderButton;
