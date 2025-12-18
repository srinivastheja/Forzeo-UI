# Forzeo UI (Vite + React + TypeScript + MUI)

A starter template with Vite, React 18, TypeScript, React Router v6, and Material UI v5.

## Features

- Vite + React + TypeScript
- React Router v6 with centralized routes and lazy loading
- Mock authentication (no backend required)
- Protected routes
- Feature-based folder structure
- MUI v5 theme and responsive Dashboard layout (AppBar + Drawer)
- ESLint + Prettier configuration

## Setup

1. Install dependencies:

   npm install

2. Run dev server:

   npm run dev

3. Build for production:

   npm run build

## Routing

Routes are centralized in `src/routes/index.tsx` using React Router v6 patterns. Add pages as lazy-loaded components and attach them to the proper layout (public `AuthLayout` or protected `DashboardLayout`).

Protected routes use `src/routes/ProtectedRoute.tsx` which checks the mock auth context and redirects to `/login` when unauthenticated.

## Adding a new page

1. Create the page in `src/pages` (e.g., `src/pages/Reports.tsx`).
2. Add a lazy import in `src/routes/index.tsx`. Use the correct layout and route element.

## Notes & Next steps

- Tests: add Vitest or Jest (not included by default)
- More robust auth: replace `src/services/auth.ts` with real API calls
- Add e2e tests and CI pipeline

---

Happy hacking! ✨
