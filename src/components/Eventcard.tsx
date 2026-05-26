import React, { useState } from "react";
import { fetchOnThisDay } from "../api/Events";
import type { OnThisDayEvent, EventCategory } from "../Types";
interface EventcardProps {
  date: string;
  category?: EventCategory | "all";
}
const Eventcard = ({ date, category = "selected" }: EventcardProps) => {
  const [events, setEvents] = useState<OnThisDayEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  React.useEffect(() => {
    if (!date) return;
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      setEvents([]);
      try {
        const data = await fetchOnThisDay(date, category);
        const result =
          category === "all"
            ? [...(data.selected ?? []), ...(data.events ?? []), ...(data.births ?? []), ...(data.deaths ?? [])]
            : (data[category] ?? []);
        setEvents(result);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [date, category]);
  if (!date) return null;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition max-w-2xl w-full mx-auto">
      <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2">On This Day</h2>
      {loading && <p className="text-gray-400 text-sm">Loading…</p>}
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {events.length > 0 && (
        <>
          <p className="text-gray-400 text-xs mb-2">{events.length} results for {date}</p>
          <ul className="space-y-3">
            {events.map((ev, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-3 border-b border-gray-100 pb-2 last:border-b-0 last:pb-0"
              >
                <span className="font-semibold text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700 min-w-10 text-center mb-1 sm:mb-0">
                  {ev.year}
                </span>
                <span className="flex-1 text-sm text-gray-800 leading-relaxed wrap-break-words">
                  {ev.text}
                </span>
                {ev.pages?.[0]?.content_urls?.desktop?.page && (
                  <a
                    href={ev.pages[0].content_urls.desktop.page}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xs ml-2 hover:underline"
                  >
                    ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default Eventcard;