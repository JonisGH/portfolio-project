# Developer portfolio (starter)

Two independently runnable applications. The site and book-search demo are not implemented yet.

## Prerequisites

- Node.js 26.12.0 (Next.js 16.4.2 requires Node.js 20.9.0 or newer)
- pnpm 12.15.0
- JDK 25 (developed with OpenJDK 25.0.5; the Maven project targets Java 25)
- Maven 3.10.0 is downloaded by `backend/mvnw`; no system Maven install is needed.

Frontend versions: Next.js 16.4.2, React and React DOM 19.3.1, TypeScript 6.0.3, ESLint 9.39.5. Backend: Spring Boot 4.1.1 with Spring MVC, Validation, Actuator and test support. See `frontend/package.json` and `backend/pom.xml` for dependencies.

## Run locally

In separate terminals from the repository root:

```sh
cd backend
./mvnw spring-boot:run
```

```sh
cd frontend
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

The frontend runs at http://localhost:3000 and the backend at http://localhost:8080. `frontend/.env.example` sets the server-only `BACKEND_URL=http://localhost:8080`; keep your real `.env.local` untracked. Next.js proxies `/api/*` to that backend **without removing `/api`**. Future frontend code should call relative `/api/*` URLs, not the backend origin. There is no application API endpoint yet; the backend health check is available directly at http://localhost:8080/actuator/health. No CORS configuration is needed for this local proxy.

## Checks

```sh
cd frontend
pnpm lint
pnpm typecheck
pnpm build
```

```sh
cd backend
./mvnw verify
```

## Structure

- `frontend/src/app/`: minimal Next.js App Router layout, placeholder page and plain CSS.
- `frontend/next.config.ts`: backend rewrite; `frontend/pnpm-lock.yaml`: frontend dependency lockfile.
- `backend/src/main/`: Spring Boot entry point and local configuration.
- `backend/src/test/`: generated application startup test; `backend/mvnw`: Maven Wrapper.
- Root `.gitignore`: build output, dependencies and local environment files.

## Future roadmap (not implemented)

Write portfolio and case-study pages with accessible markup and SEO metadata; add the Open Library-backed search and accessible autocomplete; then measure request timing and caching. Add broader tests, Docker, CI/CD and a Kubernetes lab when those features need them.
