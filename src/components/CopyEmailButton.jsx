import React, { useState } from "react";
import { motion } from "motion/react";
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "indiemenziwa@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileTap={{ scale: 0.15 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden
      hover:bg-[#10101d] transition-colors duration-300"
    >
      {copied ? (
        <motion.p
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img
            src="src/public/assets/copy-done.svg"
            className="w-5"
            alt="Clipboard icon representing copy action"
          />
          Email Address Copied !
        </motion.p>
      ) : (
        <motion.p
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="src/public/assets/copy.svg"
            className="w-5"
            alt="Clipboard icon representing copy action, next to the text Copy Email Address, both centered on a rounded button with a calm and inviting appearance"
          />
          Copy Email Address
        </motion.p>
      )}
    </motion.button>
  );
};

export default CopyEmailButton;
