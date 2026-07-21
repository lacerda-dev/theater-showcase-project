import React from "react";
import "./SocialButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialButton = ({ icon, href, label, variant }) => {
  return (
    <a
      href={href}
      className={`social-button ${variant}`}
      target="_blank"
      aria-label={label}
      title={label}
    >
      <FontAwesomeIcon icon={icon} />

      <span>{label}</span>
    </a>
  );
};
