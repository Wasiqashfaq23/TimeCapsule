# ANSWERS.md — Technical Assessment

## 1. How to run

1. Clone the repo:
   ```sh
   git clone <your-repo-url>
   cd BFacts
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. Set up your Google Books API key:
   - Create a `.env` file in the project root.
   - Add:
     ```env
     VITE_GOOGLE_BOOKS_API=your_google_books_api_key
     ```
4. Start the dev server:
   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 2. Stack choice

- **React + TypeScript + Vite + Tailwind CSS** were chosen for rapid UI development, type safety, and fast builds. React is ideal for interactive UIs, TypeScript prevents many runtime bugs, and Vite offers instant feedback. Tailwind enables quick, consistent styling.
- **Worse choice:** Vanilla JS or jQuery would make state management, API error handling, and responsive UI much harder and less maintainable.

## 3. One real edge case

- **Edge case:** The app handles ambiguous date input (e.g., `12/11` could be MM/DD or DD/MM). See [`src/api/Events.tsx`](src/api/Events.tsx#L3-L13):
  - The `parseOnThisDayDate` function auto-detects the format. If the first part is >12, it's treated as DD/MM; otherwise, MM/DD.
  - **Without this:** Users in different locales would get wrong results or errors for valid dates.

## 4. AI usage
 
- **Tool:** Claude (claude.ai)
- **Prompts:**
  - "How do I get books data with an API?"
  - "How do I get event data for a specific date?"
  - "How do I use them in a React project?"
- **What AI gave:**
  - Explained how to use the Google Books API to search books by query, and provided a typed fetch service for `src/api/Books.ts`.
  - Explained how to use the Wikimedia On This Day API (`/feed/v1/wikipedia/en/onthisday/{type}/{MM}/{DD}`) and generated `src/api/OnThisDay.ts` with auto date parsing (MM/DD vs DD/MM).
  - Showed how to wire both APIs into React components using `useState` and `useEffect`, with loading and error states.
- **What I changed:**
  - Adapted the generated code to fit the existing folder structure and component design. Adjusted props, removed duplicate input fields, and unified the styling across `BookCard` and `EventCard`.

## 5. Honest gap

- **Not good enough:**
  - The app does not cache API results, so repeated queries for the same date re-fetch data.
  - With another day: I'd add local caching (e.g., with React Query or SWR), more robust input validation, and tests for edge cases (like leap years or API rate limits).
