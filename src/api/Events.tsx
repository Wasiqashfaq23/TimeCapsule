import type {  OnThisDayResponse, EventCategory } from "../Types";

export function parseOnThisDayDate(input: string): { month: number; day: number } {
  const [a, b] = input.trim().split("/").map(Number);
  if (isNaN(a) || isNaN(b)) throw new Error(`Invalid date: "${input}"`);
  if (a > 12) return { month: b, day: a };
  return { month: a, day: b };
}

export async function fetchOnThisDay(
  input: string,
  category: EventCategory | "all" = "all"
): Promise<OnThisDayResponse> {
  const { month, day } = parseOnThisDayDate(input);
  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  const res = await fetch(
    `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/${category}/${mm}/${dd}`,
    { headers: { "Api-User-Agent": "MyApp/1.0" } }
  );
  if (!res.ok) throw new Error(`Wikipedia API error: ${res.status}`);
  return res.json();
}