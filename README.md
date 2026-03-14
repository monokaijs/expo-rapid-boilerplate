# Expo Rapid Boilerplate

A production-ready Expo boilerplate with opinionated structure and essential libraries pre-configured.

## Tech Stack

- **Expo SDK 55** — React Native 0.83, React 19.2
- **Expo Router** — File-based navigation
- **NativeWind** — TailwindCSS for React Native
- **Redux Toolkit + MMKV** — State management with persisted storage
- **i18next** — Internationalization
- **Zod** — Schema validation
- **Lucide Icons** — Icon library

## Project Structure

```
├── app/                    # Expo Router screens
│   ├── (tabs)/             # Tab navigation
│   └── _layout.tsx         # Root layout
├── lib/                    # Project source code
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable components
│   │   ├── helpers/        # Helper components (insets, language)
│   │   ├── navigation/     # Navigation components (tab bar, header)
│   │   └── ui/             # UI primitives (Button, Input, Text, etc.)
│   ├── config/             # App configuration
│   │   ├── colors.ts       # Color palette (dark + light)
│   │   ├── global.css      # Global styles
│   │   ├── i18n.ts         # i18n setup
│   │   └── locales/        # Translation files
│   ├── hooks/              # Custom hooks
│   ├── store/              # Redux store + slices
│   └── utils/              # Utility functions
├── scripts/                # Build/dev scripts
└── app.json                # Expo config
```

## Getting Started

```bash
# Install dependencies
yarn install

# Start the dev server
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android
```

## Path Aliases

The `@/` alias resolves to `./lib/`, so imports look like:

```typescript
import { AppText } from '@/components/ui';
import { useColors } from '@/hooks/useColors';
import { store } from '@/store';
```
