This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Architecture

This project follows a clean, scalable frontend architecture for a university SaaS platform. The structure is organized as follows:

### Folder Structure

```
src/
│
├── app/                     → Next.js App Router (routing only)
│   ├── layout.tsx           → Root layout with AuthProvider
│   ├── page.tsx             → Home page composed of section components
│   ├── (auth)/login/page.tsx → Login page using AuthForm
│   ├── (auth)/signup/page.tsx → Signup page using AuthForm
│   ├── dashboard/
│   │   ├── layout.tsx       → Dashboard-specific layout wrapper
│   │   ├── page.tsx         → Dashboard with lecture tabs
│   │   ├── loading.tsx      → Loading state for dashboard
│   │   └── error.tsx        → Error boundary for dashboard
│   └── globals.css          → Global styles
│
├── components/
│   ├── ui/                  → Reusable UI components (Button, Card)
│   │   ├── Button.tsx       → Styled button component with variants
│   │   └── Card.tsx         → Card wrapper for content sections
│   ├── layout/              → Layout-specific components
│   │   └── Navbar.tsx       → Navigation bar with auth state
│   └── sections/            → Page section components
│       ├── Hero.tsx         → Landing page hero section
│       ├── Features.tsx     → Features showcase section
│       ├── About.tsx        → About Study Hive section
│       ├── Testimonials.tsx → User testimonials section
│       └── Footer.tsx       → Site footer
│
├── features/
│   ├── auth/                → Auth-related logic & components
│   │   ├── service.ts       → Auth business logic (register, login)
│   │   ├── AuthForm.tsx     → Reusable auth form component
│   │   └── index.ts         → Barrel export for auth features
│   └── lectures/            → Lecture-related components & data
│       ├── service.ts       → Lecture data service (mock summaries)
│       ├── DashboardTabs.tsx → Tabbed lecture display component
│       └── index.ts         → Barrel export for lectures
│
├── hooks/                   → Custom React hooks
│   └── useAuth.ts           → Hook for logout functionality
│
├── context/                 → Global providers (AuthContext)
│   └── AuthContext.tsx      → Auth state management provider
│
├── lib/                     → Utilities, constants, helpers
│   ├── auth.ts              → JWT token utilities
│   ├── env.ts               → Environment variable helpers
│   ├── mock-db.ts           → In-memory user database
│   ├── validators.ts        → Zod validation schemas
│   └── api.ts               → Generic API client utility
│
├── types/                   → Global TypeScript types
│   └── user.ts              → User-related type definitions
│
└── middleware.ts            → Route protection middleware
```

### Architecture Principles

- **Separation of Concerns**: UI components are separated from business logic. Components focus on presentation, while features contain domain-specific logic.
- **Feature-Based Organization**: Related functionality is grouped in `features/` folders (e.g., auth, lectures), making it easy to find and maintain.
- **Reusable Components**: UI primitives in `components/ui/`, layout components in `components/layout/`, and page sections in `components/sections/`.
- **Custom Hooks**: Business logic abstracted into hooks for reusability and testability.
- **Global State**: Auth context provides user state across the app.
- **Type Safety**: Centralized types in `types/` ensure consistency.
- **Utilities**: Shared helpers and constants in `lib/` avoid duplication.

This structure supports scalability for a SaaS platform, allowing easy addition of new features, components, and maintaining clean code separation.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
