FROM oven/bun:latest AS base
WORKDIR /app

FROM base AS install
COPY package.json ./
RUN bun install --production

FROM base AS release
COPY --from=install /app/node_modules ./node_modules
COPY src/ ./src/
COPY package.json ./

EXPOSE 3000
CMD ["bun", "run", "src/index.ts"]
