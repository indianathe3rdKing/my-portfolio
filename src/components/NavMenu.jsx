import React from "react";

const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
      >
        <img
          src={
            isOpen
              ? "src/public/assets/close.svg"
              : "src/public/assets/menu.svg"
          }
          className="w-6 h-6"
          alt="toggle"
        />
      </button>
    </div>
  );
};

export default NavMenu;
