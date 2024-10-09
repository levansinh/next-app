import {Input, InputProps} from "@nextui-org/react";
import React, {Ref} from "react";

export interface IInputProps extends InputProps {
  title?: string;
  required?: boolean;
  messageError?: string;
  name: string;
  id: string;
}

const CInput = React.forwardRef<HTMLInputElement, IInputProps>(
  ({title, required, messageError, ...passProps}, ref) => {
    return (
      <>
        {title && (
          <span>
            {title} {required && <span className="text-red-400">*</span>}
          </span>
        )}
        <Input {...passProps} ref={ref} />

        {messageError && <span className="text-red-400 text-xs">{messageError}</span>}
      </>
    );
  },
);

CInput.displayName = "CInput";

export default CInput;
