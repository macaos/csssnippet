import React, { useState } from "react";
import { css } from "emotion";
import classnames from "classnames";

const SourceSection = ({ children }: { children: React.Attributes }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <h3
        onClick={() => {
          setOpen(!isOpen);
        }}
        className={css`
          margin-bottom: ${isOpen ? "1.4rem" : "0 !important"};
        `}
      >
        Source
        <i
          className={classnames([
            { "xi-plus-square-o xi-x": !isOpen },
            { "xi-minus-square-o xi-x": isOpen },
            css`
              margin-left: 1rem;
            `
          ])}
        ></i>
      </h3>
      <div
        className={css`
          display: ${isOpen ? "block" : "none"};
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default SourceSection;
