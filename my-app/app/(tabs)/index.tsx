import { useState } from "react";
import { TouchableOpacity, Alert, ScrollView } from "react-native";
import { ThemedView } from "../../components/themedView";
import { ThemedText } from "../../components/themedText";

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
    <ScrollView>
      <ThemedView className="w-full max-w-[380px] self-center pt-8 px-6">
        <ThemedText className="text-4xl font-bold mt-5">
          Let's Crush It{" "}
          <ThemedText style={{ color: "#39FF14" }}>Today</ThemedText>
        </ThemedText>
        <ThemedText className="text-xl mt-2">Customize your session</ThemedText>

        <ThemedView className="my-4">
          <ThemedView className="my-1">
            <ThemedText className="text-xl font-bold mb-1">
              🕒Duration
            </ThemedText>
            <ThemedView className="flex-row flex-wrap justify-around border border-gray-600 rounded-2xl">
              {["10mins", "20mins", "30mins", "60mins"].map((item) => (
                <TouchableOpacity
                  key={item}
                  className={`w-40 items-center py-1 border rounded-full m-2 ${
                    selectedDuration === item
                      ? "border-[#00F0FF] border-2"
                      : "border-gray-400 border"
                  }`}
                  style={
                    selectedDuration === item
                      ? {
                          shadowColor: "#00F0FF",
                          shadowOffset: { width: 0, height: 0 },
                          shadowOpacity: 0.4,
                          shadowRadius: 3,
                          elevation: 8,
                        }
                      : {}
                  }
                  onPress={() => setSelectedDuration(item)}
                >
                  <ThemedText className="text-xl">{item}</ThemedText>
                </TouchableOpacity>
              ))}
            </ThemedView>
          </ThemedView>

          <ThemedView className="my-5">
            <ThemedText className="text-xl font-bold mb-1">
              👣Target Area
            </ThemedText>
            <ThemedView className="flex-row flex-wrap justify-around border border-gray-600 rounded-2xl">
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
                  className={`w-40 items-center py-1 border rounded-full m-2 ${
                    selectedTarget === item
                      ? "border-[#00F0FF] border-2"
                      : "border-gray-400 border"
                  }`}
                  style={
                    selectedTarget === item
                      ? {
                          shadowColor: "#00F0FF",
                          shadowOffset: { width: 0, height: 0 },
                          shadowOpacity: 0.4,
                          shadowRadius: 3,
                          elevation: 8,
                        }
                      : {}
                  }
                  onPress={() => setSelectedTarget(item)}
                >
                  <ThemedText className="text-xl">{item}</ThemedText>
                </TouchableOpacity>
              ))}
            </ThemedView>
          </ThemedView>

          <ThemedView className="my-5">
            <ThemedText className="text-xl font-bold mb-1">🔥Style</ThemedText>
            <ThemedView className="flex-row flex-wrap justify-around border border-gray-600 rounded-2xl">
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
                  className={`w-40 items-center py-1 border rounded-full m-2 ${
                    selectedStyle === item
                      ? "border-[#00F0FF] border-2"
                      : "border-gray-400 border"
                  }`}
                  style={
                    selectedStyle === item
                      ? {
                          shadowColor: "#00F0FF",
                          shadowOffset: { width: 0, height: 0 },
                          shadowOpacity: 0.4,
                          shadowRadius: 3,
                          elevation: 8,
                        }
                      : {}
                  }
                  onPress={() => setSelectedStyle(item)}
                >
                  <ThemedText className="text-xl">{item}</ThemedText>
                </TouchableOpacity>
              ))}
            </ThemedView>
          </ThemedView>

          <TouchableOpacity
            className={`items-center my-5 py-2 rounded-full ${
              isComplete ? "bg-[#39FF14]" : "bg-gray-300"
            }`}
            onPress={handleNext}
            disabled={!isComplete}
          >
            <ThemedText className="text-xl" style={{ color: "black" }}>
              Next
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}
