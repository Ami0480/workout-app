import { ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { ThemedView } from "../../components/themedView";
import { ThemedText } from "../../components/themedText";

export default function Confirm() {
  const { duration, target, style } = useLocalSearchParams();
  const router = useRouter();

  const handleWorkout = () => {
    router.push("/workout");
  };
  const handleBack = () => {
    router.back();
  };

  return (
    <ScrollView>
      <ThemedView className="w-full max-w-[380px] self-center pt-8 px-6">
        <ThemedText className="text-4xl font-bold mt-5">
          You're All Set!
        </ThemedText>
        <ThemedText className="text-2xl mt-5 mb-2 font-bold">
          Here’s your session summary
        </ThemedText>
        <ThemedText className="text-xl mt-2">
          Duration : <ThemedText className="font-bold">{duration}</ThemedText>
        </ThemedText>
        <ThemedText className="text-xl mt-2">
          Target : <ThemedText className="font-bold">{target}</ThemedText>
        </ThemedText>
        <ThemedText className="text-xl mt-2">
          Style : <ThemedText className="font-bold">{style}</ThemedText>
        </ThemedText>

        <TouchableOpacity
          className="w-1/2 items-center my-5 py-2 rounded-full border"
          onPress={handleBack}
        >
          <ThemedText className="text-xl" style={{ color: "black" }}>
            Change
          </ThemedText>
        </TouchableOpacity>

        <ThemedText className="text-2xl mt-2 font-bold">
          Preparation Tips
        </ThemedText>
        <ThemedText className="text-xl mt-2">• Light stretch</ThemedText>
        <ThemedText className="text-xl mt-2">• Warm up your joints</ThemedText>
        <ThemedText className="text-xl mt-2">• Keep water nearby</ThemedText>
        <ThemedText className="text-xl mt-2">• Find enough space</ThemedText>
        <ThemedText className="text-xl mt-2">• Put on good music</ThemedText>

        <ThemedText className="text-lg mt-5">
          Are you ready to crush it? Let’s go! 🔥
        </ThemedText>

        <TouchableOpacity
          className="items-center my-5 py-2 rounded-full border border-[#00F0FF] bg-[#00F0FF]"
          onPress={handleWorkout}
        >
          <ThemedText className="text-xl" style={{ color: "black" }}>
            Start Workout
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}
