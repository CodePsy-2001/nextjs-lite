# NextJS Lite Boilerplate

### Features

Developer experience first, extremely flexible code structure and only keep what you need:

- ⚡ [Next.js](https://nextjs.org) with App Router
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
    - 💡 Absolute Imports using `@` prefix
    - ✅ Strict Mode for TypeScript and React 19
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Antfu
  configuration)
    - Code Formatter with [ESLint Stylistic](https://eslint.style/)
      and [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss)
- 🦊 Lefthook for Git Hooks (replacing husky)
    - 🚓 Lint git commit with Commitlint
    - 📓 Write standard compliant commit messages with Commitizen
- 🔍 Unused files and dependencies detection with Knip
- 🦺 Unit Testing with Vitest and Browser mode
- 💯 Maximize lighthouse score
    - ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
    - 🤖 Sitemap.xml, robots.txt, SEO metadata, JSON-LD and Open Graph tags
- 👷 Automatic dependency updates with Dependabot

### Differences from [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate)

We have removed features that are similar to advertisements.

- No default DB/SQL provider
- No default AI copilot
- No default system logger
- No SaaS products that connect to other external dashboards

사용자에 따라 불필요하게 느낄 수도 있는 기능 몇 개를 제거했습니다

- 테스트 커버리지 시각화 기능 제거했습니다
- GitHub Actions으로 테스트를 실행하지 않습니다 (대신 Commit Hook을 이용하세요)
- knip config file을 제거했습니다 (zero config로 사용하세요)
- react-hook-form은 매우 대중적인 라이브러리지만, 기본 구성에서는 제거했습니다

아래 라이브러리들을 개인적으로 추천합니다

```shell
pnpm add react-hook-form swr
pnpm add es-toolkit @toss/react
# shadcn, tweakcn
```
