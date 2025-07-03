import React from "react";
import { mySocials } from "../constants/index";
export const Footer = () => {
  return (
    <div className="flex w-full py-4 px-3 justify-between items-center flex-col max-h-150 md:flex-row">
      <div className="flex gap-2 subtext m-4 hover:text-neutral-200">
        <p>Terms of Service. </p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3 text-xl md:gap-4 ">
        {mySocials.map((social) => {
          return (
            <a key={social.id} href={social.href}>
              <img
                className="size-4 md:size-6 hover-animation"
                src={social.icon}
                alt={social.name}
              />
            </a>
          );
        })}
      </div>
      <p className="subtext m-4 ">
        Copyright&copy;2025 Indiphile. All rights reserved
      </p>
    </div>
  );
};
