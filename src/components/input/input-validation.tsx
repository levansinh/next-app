import CInput, {IInputProps} from "@/components/input/input";
import {Controller, useFormContext} from "react-hook-form";

function InputValidation({name, ...passProps}: IInputProps) {
  const {
    formState: {errors},
  } = useFormContext();
  return (
    <Controller
      name={name}
      render={({field}) => (
        <CInput
          messageError={(errors[name] as unknown as string) || ""}
          {...field}
          {...passProps}
        />
      )}
    />
  );
}

export default InputValidation;
