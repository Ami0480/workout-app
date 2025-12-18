import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  className?: string;
  lightColor?: string;
  darkColor?: string;
  type?: "default";
};

export function ThemedText({
  className,
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      className={`text-black dark:text-white ${className}`}
      style={[type === "default" ? styles.default : undefined, style]}
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
});
