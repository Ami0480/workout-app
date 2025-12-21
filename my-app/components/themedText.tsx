import { Text, type TextProps } from "react-native";
import { cssInterop } from "nativewind";

cssInterop(Text, {
  className: "style",
});

export function ThemedText({
  className,
  style,
  ...rest
}: TextProps & { className?: string }) {
  return (
    <Text
      className={`text-black dark:text-white ${className || ""}`}
      style={style}
      {...rest}
    />
  );
}
