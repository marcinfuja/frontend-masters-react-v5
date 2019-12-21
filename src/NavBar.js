import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const NavBar = () => {
  const [padding] = useState(15);

  return (
    <header
      css={css`
        background-color: ${colors.primary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 50px;
          display: inline-block;
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite;
          }
        `}
        role="img"
        aria-label="logo"
      >
        Fire
      </span>
    </header>
  );
};

export default NavBar;
