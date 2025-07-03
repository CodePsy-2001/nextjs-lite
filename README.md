# NextJS Lite Boilerplate

<p align="center">
  <a href="https://nextjs-lite.vercel.app">
    <img
      src="public/og.png?raw=true"
      alt="NextJS Lite Bolierplate banner"
      style="max-width: 100%; height: auto;"
    />
  </a>
</p>

### Features

Optimized for developer experience with an extremely flexible code structure. Only includes what you actually need:

* ⚡ [Next.js](https://nextjs.org) with App Router
* 🔥 Type checking using [TypeScript](https://www.typescriptlang.org)
    * 💡 Absolute Imports using `@` prefix
    * ✅ Strict Mode for both TypeScript and React 19
* 💎 Integrated with [Tailwind CSS](https://tailwindcss.com)
* 📏 Linting via [ESLint](https://eslint.org)
    * Uses default Next.js config, Core Web Vitals rules, Tailwind CSS rules, and Antfu config
    * Code formatting with [ESLint Stylistic](https://eslint.style/)
      and [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss)
* 🦊 Git Hooks managed with Lefthook (as a replacement for Husky)
    * 🚓 Commit message linting with Commitlint
    * 📓 Write standard-compliant commit messages with Commitizen
* 🔍 Detect unused files and dependencies with Knip
* 🦺 Unit testing with Vitest (including browser mode)
* 💯 Optimized for high Lighthouse scores
    * ⚙️ [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
    * 🤖 SEO features including sitemap.xml, robots.txt, SEO metadata, JSON-LD, and Open Graph tags
* 👷 Automated dependency updates with Dependabot

### Differences from [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)

Removed features that may feel like advertisements:

* No default database or SQL provider
* No built-in AI assistant
* No system logger by default
* No SaaS integrations or external dashboards

Also removed some features that may be unnecessary for many users:

* Test coverage visualization has been removed
* Does not run tests via GitHub Actions (use commit hooks instead)
* Removed custom `knip` config (uses zero-config)
* Although `react-hook-form` is a very popular library, it is not included by default

### Recommended Libraries

These libraries are recommended but not included:

```shell
pnpm add react-hook-form swr
pnpm add es-toolkit @toss/react
# shadcn, tweakcn
```
