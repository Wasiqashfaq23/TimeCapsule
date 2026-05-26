# BFacts — Birthday Time Capsule

A web app that lets you explore books and historical events from your birthday, powered by the Google Books API and Wikimedia On This Day API.

## 🚀 How to Run

1. **Clone the repo:**
   ```sh
   git clone https://github.com/Wasiqashfaq23/TimeCapsule.git
   cd TimeCapsule
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. **Set up API keys:**
   - Create a `.env` file in the project root.
   - Add your Google Books API key:
     ```env
     VITE_GOOGLE_BOOKS_API=your_google_books_api_key
     ```
   - (No key needed for Wikimedia On This Day API)
4. **Start the dev server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
5. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## 🛠️ Stack
- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **APIs:**
  - Google Books API
  - Wikimedia On This Day API

## 📁 Project Structure
- `src/` — All source code
- `src/components/` — UI components
- `src/api/` — API logic
- `src/Types.ts` — TypeScript types

## 📝 Assessment Answers
See [ANSWERS.md](./ANSWERS.md) for the required technical assessment answers.

---

**Note:** If you have any issues, check your API key and internet connection.
