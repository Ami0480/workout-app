import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 py-14 px-6 bg-white dark:bg-black">
      <Text className="text-4xl font-bold text-black dark:text-white">
        Let's Crush It Today
      </Text>
      <Text className="text-xl">Customize your session</Text>
      <Text className="text-xl">🕒Duration</Text>
      <View className="flex-row flex-wrap justify-around border">
        {["10mins", "20mins", "30mis", "60mins"].map((item) => (
          <TouchableOpacity
            key={item}
            className="w-44 items-center py-1 border rounded-full m-1"
          >
            <Text className="text-xl">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
