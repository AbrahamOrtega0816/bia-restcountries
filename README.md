## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## folder structure

# proposed architecture was Structure by functionality or modular

├── **tests**
│   ├── countries.test.tsx
│   ├── countryDetail.test.tsx
│   ├── navbar.test.tsx
│   └── switchTheme.test.tsx
├── next-env.d.ts
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── backward-white.svg
│   │   ├── backward.svg
│   │   ├── moon-svgrepo-com.svg
│   │   └── sun-2-svgrepo-com.svg
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── components
│   │   ├── countries
│   │   │   ├── countriesCard
│   │   │   │   └── index.tsx
│   │   │   └── countriesFilters
│   │   │   └── index.tsx
│   │   └── navbar
│   │   ├── components
│   │   │   └── SwitchTheme.tsx
│   │   └── index.tsx
│   ├── hooks
│   │   └── useDarkMode.ts
│   ├── pages
│   │   ├── \_app.tsx
│   │   ├── \_document.tsx
│   │   ├── countries
│   │   │   ├── detail
│   │   │   │   └── [id].tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── services
│   │   └── countriesService.ts
│   ├── styles
│   │   └── globals.css
│   ├── types
│   │   └── countriesType.ts
│   └── utils
│   └── createMockRouter.ts
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
└── vitestSetup.ts

# how did i solve it

create a hook to handle the dark theme, create a components folder that could be used in other modules, and use the vitest library for the fundamental component tests. Use the tailwind library to manage the styles of the card and the responsiveness of the app in conjunction with daisyui.
