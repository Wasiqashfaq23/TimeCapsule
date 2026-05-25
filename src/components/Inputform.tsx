import fetchBooksByYear from "../api/Books";
import { useState } from "react";

function Inputform() {
  const [Day, setDay] = useState<number | undefined>();
  const [Month, setMonth] = useState<number | undefined>();
  const [Year, setYear] = useState<number | undefined>();
  const handleclick = async () => {
    if (Day && Month && Year) {
      const bookstring = await fetchBooksByYear(Year).then((data: JsonWebKey) => {
        console.log(data);
      });
    }
  };


  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const isValid = Day && Month && Year &&
    Day >= 1 && Day <= 31 &&
    Month >= 1 && Month <= 12 &&
    Year >= 1900 && Year <= 2025;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md shadow-sm">

        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900">Birthday Time Capsule</h1>
          <p className="text-sm text-gray-500 mt-1">Enter your date of birth to explore history</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Day</label>
              <input
                type="number"
                placeholder="01"
                min={1}
                max={31}
                value={Day ?? ""}
                onChange={(e) => setDay(e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full border border-gray-200 rounded-xl px-3 py-3 text-center text-lg font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Month</label>
              <input
                type="number"
                placeholder="01"
                min={1}
                max={12}
                value={Month ?? ""}
                onChange={(e) => setMonth(e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full border border-gray-200 rounded-xl px-3 py-3 text-center text-lg font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Year</label>
              <input
                type="number"
                placeholder="1995"
                min={1900}
                max={2025}
                value={Year ?? ""}
                onChange={(e) => setYear(e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-full border border-gray-200 rounded-xl px-3 py-3 text-center text-lg font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>
          </div>

          {Day && Month && Month >= 1 && Month <= 12 && (
            <p className="text-sm text-gray-400 text-center">
              {Day} {months[Month - 1]} {Year ?? ""}
            </p>
          )}

          <button
            onClick={handleclick}
            className={`w-full py-3 rounded-xl text-sm font-medium transition
              ${isValid
                ? "bg-gray-900 text-white hover:bg-gray-800 cursor-pointer"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            Open my time capsule
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputform;