# Copilot instructions for this repo

This document gives concise, actionable guidance to AI coding agents working on this Expo + React Native TypeScript project.

- **Big picture**: This is an Expo app using `expo-router` (file-based routing) alongside a manual `navigation/StackNavigator.tsx` (stack screens). The main app shell is at `app/_layout.tsx` which wraps the app with a `ThemeProvider` and mounts the `(tabs)` route.

- **Run / build**: Use the scripts in `package.json`:
  - `npm install` to install deps
  - `npm start` (alias for `expo start`) to run Metro and the Expo dev server
  - `npm run reset-project` moves starter code to `app-example` and creates a blank `app` directory

- **TypeScript & paths**: `tsconfig.json` enables strict typing and maps `@/*` to the repo root. Use `@/` imports for repo-local modules (e.g. `@/hooks/use-color-scheme`).

- **Where to add features**:
  - UI screens live under `screens/*.tsx`. The router also uses files in the `app/` folder (see `app/_layout.tsx`). Follow existing patterns: create a screen in `screens/` and register it in `navigation/StackNavigator.tsx` if it should be part of the manual stack.
  - Reusable UI components live in `components/` and `components/ui/`.
  - API clients belong in `services/` as small axios instances that export focused functions (see `services/dogApi.ts`, `services/imdbApi.ts`, `services/movieRatingsApi.ts`).

- **API & secrets**: RapidAPI keys are hard-coded in `services/imdbApi.ts` and `services/movieRatingsApi.ts` — treat these as sensitive. When modifying or adding APIs, prefer using environment variables or Expo config `app.config` / `Constants.expoConfig.extra` instead of committing secrets.

- **Network pattern**: Services create an axios instance with `baseURL` and `timeout`, then export small async helpers that return `res.data`. Follow that shape for new endpoints.

- **Navigation pattern**: `navigation/StackNavigator.tsx` defines a typed `RootStackParamList` and registers screens with `createNativeStackNavigator`. When adding params, update the `RootStackParamList` accordingly.

- **Notifications**: Push registration and sending live in `screens/App.tsx`. Registration uses `expo-notifications`, `Device.isDevice` checks, and expects an EAS `projectId` available via `Constants.expoConfig.extra.eas.projectId` or `Constants.easConfig.projectId`.

- **Styling & theme**: The app uses a theme hook `hooks/use-color-scheme.ts` and a `ThemeProvider` in `app/_layout.tsx`. Maintain theme-aware components: prefer `themed-view.tsx` and `themed-text.tsx` helpers under `components/`.

- **Conventions**:
  - Use strict TypeScript types (the repo has `"strict": true`).
  - File-based routing is present — don't remove `app/` layout screens unless you migrate routes deliberately.
  - Keep API helpers tiny and side-effect free (return parsed `data`).

- **Files to inspect when troubleshooting**:
  - `app/_layout.tsx` — top-level routing & theme
  - `navigation/StackNavigator.tsx` — manual stack and screen registration
  - `screens/App.tsx` — push notification flow
  - `services/*.ts` — network clients and API usage

- **Examples**:
  - Add a new API helper: follow `services/dogApi.ts` (create axios instance, export `getX` async fn returning `res.data`).
  - Add a new screen and route: create `screens/MyScreen.tsx`, then add `<Stack.Screen name="MyScreen" component={MyScreen} />` in `navigation/StackNavigator.tsx` and update `RootStackParamList` types.

If anything above is unclear or you want more details (linter rules, CI, or environment setup), tell me which area to expand.
