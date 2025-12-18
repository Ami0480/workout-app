import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 py-14 pl-6 bg-white dark:bg-black">
      <Text className="text-4xl font-bold text-black dark:text-white">
        Let's Crush It Today
      </Text>
      <Text className="text-xl">Customize your session</Text>
      <Text className="text-xl">Duration</Text>
    </View>
  );
}
