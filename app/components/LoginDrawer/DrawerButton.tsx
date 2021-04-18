import React from "react";
import { Button, NativeBase } from "native-base";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { isIos } from "../../helpers/platform";

export interface DrawerButtonProps {
  children: React.ReactNode;
}
// Due to a known issue on android we must wrap the button
// in a TouchableOpacity provided bby the library itself
// Reference: https://gorhom.github.io/react-native-bottom-sheet/troubleshooting#pressables--touchables-are-not-working-on-android
const DrawerButton = ({
  onPress,
  children,
  ...rest
}: NativeBase.Button & DrawerButtonProps) => {
  return isIos ? (
    <Button onPress={onPress} {...rest}>
      {children}
    </Button>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <Button {...rest}>{children}</Button>
    </TouchableOpacity>
  );
};

export default DrawerButton;
