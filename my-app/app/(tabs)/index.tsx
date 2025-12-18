import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 pt-14 px-6 bg-white dark:bg-black">
      <Text className="text-4xl font-bold mt-5 text-black dark:text-white">
        Let's Crush It Today
      </Text>
      <Text className="text-xl mt-2">Customize your session</Text>

      <View className="my-6">
        <View className="my-5">
          <Text className="text-xl font-bold mb-1">🕒Duration</Text>
          <View className="flex-row flex-wrap justify-around border rounded-2xl">
            {["10mins", "20mins", "30mis", "60mins"].map((item) => (
              <TouchableOpacity
                key={item}
                className="w-44 items-center py-1 border rounded-full m-2"
              >
                <Text className="text-xl">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="my-5">
          <Text className="text-xl font-bold mb-1">👣Target Area</Text>
          <View className="flex-row flex-wrap justify-around border rounded-2xl">
            {[
              "💪🏻Upper Body",
              "🦵🏻Lower Body",
              "👤Core",
              "👤Full Body",
              "👤Glutes",
              "🙆🏻‍♀️Stretching",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                className="w-44 items-center py-1 border rounded-full m-2"
              >
                <Text className="text-xl">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="my-5">
          <Text className="text-xl font-bold mb-1">🔥Style</Text>
          <View className="flex-row flex-wrap justify-around border rounded-2xl">
            {[
              "⚡️HIIT",
              "🏋Dumbbell",
              "🧘🏻Yoga",
              "🤸🏼Pilates",
              "💪🏻Body Weight",
              "🏃🏼‍♀️Cardio",
            ].map((item) => (
              <TouchableOpacity
                key={item}
                className="w-44 items-center py-1 border rounded-full m-2"
              >
                <Text className="text-xl">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity className="items-center my-5 py-2 border rounded-full">
          <Text className="text-xl">Start Workout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
