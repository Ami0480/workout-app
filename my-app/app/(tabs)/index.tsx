import { useState } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";

export default function Index() {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const isComplete = selectedDuration && selectedTarget && selectedStyle;

  const handleNext = () => {
    if (!isComplete) {
      Alert.alert(
        "Please select all options",
        "Choose duration, target area, and style to continue."
      );
      return;
    }
  };

  return (
    <View className="flex-1 pt-14 px-6 bg-white dark:bg-black">
      <Text className="text-4xl font-bold mt-5 text-black dark:text-white">
        Let's Crush It <Text className="text-[#7eff00]">Today</Text>
      </Text>
      <Text className="text-xl mt-2">Customize your session</Text>

      <View className="my-6">
        <View className="my-5">
          <Text className="text-xl font-bold mb-1">🕒Duration</Text>
          <View className="flex-row flex-wrap justify-around border rounded-2xl">
            {["10mins", "20mins", "30mis", "60mins"].map((item) => (
              <TouchableOpacity
                key={item}
                className={`w-44 items-center py-1 border rounded-full m-2 ${
                  selectedDuration === item
                    ? "border-[#66E1FF] border-2"
                    : "border-gray-400 border"
                }`}
                style={
                  selectedDuration === item
                    ? {
                        shadowColor: "#66E1FF",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.4,
                        shadowRadius: 3,
                        elevation: 8,
                      }
                    : {}
                }
                onPress={() => setSelectedDuration(item)}
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
                className={`w-44 items-center py-1 border rounded-full m-2 ${
                  selectedTarget === item
                    ? "border-[#66E1FF] border-2"
                    : "border-gray-400 border"
                }`}
                onPress={() => setSelectedTarget(item)}
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
                className={`w-44 items-center py-1 border rounded-full m-2 ${
                  selectedStyle === item
                    ? "border-[#66E1FF] border-2"
                    : "border-gray-400 border"
                }`}
                onPress={() => setSelectedStyle(item)}
              >
                <Text className="text-xl">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          className={`items-center my-5 py-2 rounded-full ${
            isComplete ? "bg-[#7eff00]" : "bg-gray-300"
          }`}
          onPress={handleNext}
          disabled={!isComplete}
        >
          <Text
            className={`text-xl ${isComplete ? "text-black" : "text-gray-500"}`}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
