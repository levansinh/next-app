import {Button, ButtonProps} from "@nextui-org/react";
import React from "react";

export interface ICButton extends ButtonProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const CButton = React.forwardRef<HTMLButtonElement, ICButton>(
  ({leftContent, rightContent, children, ...passProps}, ref) => {
    return (
      <Button {...passProps} ref={ref}>
        {leftContent && <span>{leftContent}</span>}
        {children}
        {rightContent && <span>{rightContent}</span>}
      </Button>
    );
  },
);

CButton.displayName = "CButton";

export default CButton;
