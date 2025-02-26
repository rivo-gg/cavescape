FROM node:20-alpine AS base
WORKDIR /app

# Update Corepack
RUN corepack enable && npm i -g corepack@latest

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json pnpm-lock.yaml ./

FROM base AS prod-deps
RUN pnpm install --prod

FROM base AS build-deps
RUN pnpm install

FROM build-deps AS build
COPY . .
RUN pnpm build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules 
COPY --from=build /app/dist ./dist

# Bind to all interfaces
ENV HOST=0.0.0.0
# Port to listen on
ENV PORT=4321
# Just convention, not required
EXPOSE 4321

CMD node ./dist/server/entry.mjs # Start the app
