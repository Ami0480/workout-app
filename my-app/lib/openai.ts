// lib/openai.ts
const OPENAI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.warn(
    "⚠️ No OpenAI API key found. Set EXPO_PUBLIC_OPENAI_API_KEY in your .env file."
  );
}

export type WorkoutExercise = {
  name: string; // "Squat"
  animationKey: string; // "squat"
  durationSeconds: number; // 20, 30, 40...
  notes?: string; // short tip
};

type GenerateWorkoutParams = {
  duration: string; // "10mins"
  target: string; // "Upper Body"
  style: string; // "HIIT"
};

/**
 * Call OpenAI to generate a random workout using ONLY
 * these 4 safe exercises: push_up, sit_up, squat, high_knees.
 */
export async function generateWorkoutAI(
  params: GenerateWorkoutParams
): Promise<WorkoutExercise[]> {
  const { duration, target, style } = params;

  const minutes = parseInt(duration.replace(/\D/g, ""), 10) || 10;

  const body = {
    model: "gpt-4.1-mini",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "You are a workout generator for a mobile fitness app. " +
          "Return ONLY valid JSON. Exercises must be beginner-friendly.",
      },
      {
        role: "user",
        content: `
Generate a ${minutes}-minute ${style} style workout focusing on ${target}.

IMPORTANT RULES:
- You may ONLY use these exercises:
  - push_up
  - sit_up
  - squat
  - high_knees
- For each exercise, choose an "animationKey" from that list.
- DurationSeconds for each exercise should be between 20 and 40 seconds.
- Keep it safe for beginners: no advanced or dangerous moves.

Return JSON in this shape:

{
  "exercises": [
    {
      "name": "Push Up",
      "animationKey": "push_up",
      "durationSeconds": 30,
      "notes": "Keep your core tight and back straight."
    }
  ]
}
      `,
      },
    ],
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("OpenAI error:", text);
    throw new Error("Failed to generate workout");
  }

  const json = await res.json();

  const content = json.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("Empty AI response");
  }

  let parsed: { exercises: WorkoutExercise[] };

  try {
    parsed = JSON.parse(content);
  } catch (e) {
    console.error("Failed to parse AI JSON:", e, content);
    throw new Error("Invalid JSON from AI");
  }

  return parsed.exercises || [];
}
