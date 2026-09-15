# AGENTS.md

## Project overview

`ukpd` is a TypeScript Node.js client for the [UK Police API](https://data.police.uk/docs/). Source code lives in `src/`, JavaScript and TypeScript usage examples live in `examples/`, and compiled JavaScript plus declarations are generated in `build/`.

## Runtime and dependencies

- Use Node.js 20 or 22 and npm 10, matching `package.json` and CI.
- Install dependencies with `npm ci` so the checked-in `package-lock.json` remains authoritative.
- Keep runtime dependencies minimal. The client uses the global `fetch` available in supported Node versions.

## Development workflow

- Implement API methods in `src/methods/` and keep endpoint paths centralized in `src/utils/endpoints.ts`.
- Use `src/utils/fetch-data.ts` for requests so API calls share the same base URL and response handling.
- Export new public methods and types from `src/index.ts`.
- Add or update a behavior-focused test next to the relevant method in `src/methods/`.
- Keep examples in both `examples/js/` and `examples/ts/` aligned when the public API changes.
- Do not edit `build/` by hand; it is generated and ignored by Git.
- Match the existing TypeScript style: single quotes, no semicolons, and the existing lightweight module structure.

## Verification

Run the smallest relevant check while iterating:

```sh
npm run build
npm run unit
npm run lint
npm run examples
```

Run the full suite before handing off changes:

```sh
npm test
```

The Jest tests and examples make live requests to `https://data.police.uk`, so failures can reflect API availability or network conditions. CI runs `npm ci`, `npm run build`, and `npm test` on Node 20 and Node 22.

## API and compatibility

- Preserve the existing public exports and return shapes unless a change explicitly requires a breaking API update.
- Keep method parameters consistent with the corresponding UK Police API endpoint.
- Prefer assertions about returned data and observable behavior over implementation details.
- Update `README.md` and examples when adding or changing public functionality.
