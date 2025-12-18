import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  className?: string;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  className,
  lightColor,
  darkColor,
  ...props
}: ThemedViewProps) {
  return <View className={`bg-white dark:bg-black ${className}`} {...props} />;
}
