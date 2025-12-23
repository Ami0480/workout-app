import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { ThemedView } from "../../components/themedView";
import { ThemedText } from "../../components/themedText";
import { useLocalSearchParams } from "expo-router";
import { generateWorkoutAI, type WorkoutExercise } from "../../lib/openai";

export default function Workout() {
  const { duration, target, style } = useLocalSearchParams<{
    duration?: string;
    target?: string;
    style?: string;
  }>();

  const [exercise, setExercise] = useState<WorkoutExercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadWorkout() {
      try {
        setLoading(true);
        setError(null);

        const result = await generateWorkoutAI({
          duration: duration || "10mins",
          target: target || "Full Body",
          style: style || "HIIT",
        });

        setExercises(result);
      } catch (e: any) {
        console.error(e);
        setError("Sorry, could not generate workout. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, [duration, target, style]);

  return (
    <ScrollView>
      <ThemedView className="w-full max-w-[380px] self-center pt-8 px-6">
        <ThemedText className="text-3xl font-bold mb-2">
          Your AI Workout
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}
