import {
  Input as GluestackInput,
  InputField,
  FormControl,
  FormControlErrorText,
  FormControlError,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} width="$full" mb={"$4"}>
      <GluestackInput
        isInvalid={isInvalid}
        h={"$14"}
        borderWidth={"$0"}
        borderRadius={"$md"}
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? "$red500" : "$green500",
        }}
        $invalid={{
          borderColor: "$red500",
          borderWidth: 1,
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
      >
        <InputField
          bg="$gray700"
          color="$white"
          px={"$4"}
          fontFamily="$body"
          placeholderTextColor={"$gray300"}
          {...rest}
        />
      </GluestackInput>

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
