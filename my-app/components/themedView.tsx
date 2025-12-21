import { View, type ViewProps } from "react-native";
import { cssInterop } from "nativewind";

cssInterop(View, {
  className: "style",
});

export function ThemedView({
  className,
  style,
  ...rest
}: ViewProps & { className?: string }) {
  return (
    <View
      className={`bg-white dark:bg-black ${className || ""}`}
      style={style}
      {...rest}
    />
  );
}
