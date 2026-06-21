# Jukto CLI

Node.js CLI that connects a local machine to the Jukto mobile app through the Jukto gateway. It runs from the project directory you want to expose and keeps filesystem, terminal, process, port, git, and AI actions scoped to that working tree.

## Requirements

- Node.js 18 or newer
- npm
- Jukto mobile app for QR/session pairing

## Usage

Run the published package:

```bash
npx jukto-cli
```

The CLI prints a QR code and session details. Scan the QR code with the Jukto app to connect to the current working directory.

Common options:

```bash
npx jukto-cli --help
npx jukto-cli --new
npx jukto-cli --debug
npx jukto-cli --extra-ports 3000,8080
```

Options:

| Option | Description |
| --- | --- |
| `-h`, `--help` | Show CLI help |
| `-n`, `--new` | Create a fresh session code instead of reusing the saved one |
| `-d`, `--debug` | Enable verbose CLI and AI backend logs |
| `--extra-ports` | Comma-separated local ports to expose through Jukto |

## Configuration

By default, the CLI uses the public Jukto services:

- Gateway: `https://proxy.jukto.pw`
- Manager: `https://manager.jukto.pw`

Override them with environment variables when developing against local or custom infrastructure:

```bash
JUKTO_PROXY_URL=http://localhost:3001 \
JUKTO_MANAGER_URL=http://localhost:3002 \
npx jukto-cli
```

Other useful environment variables:

| Variable | Description |
| --- | --- |
| `JUKTO_PROXY_URL` | Gateway/proxy URL |
| `JUKTO_MANAGER_URL` | Manager URL |
| `JUKTO_DEBUG` | Set to `1` for debug logging |
| `JUKTO_DEBUG_AI` | Set to `1` for AI backend debug logging |
| `NO_COLOR` | Disable colored terminal output |
| `FORCE_COLOR` | Force colored terminal output |

Session config is saved per project root in the OS-specific Jukto config directory:

- macOS: `~/Library/Application Support/jukto/config.json`
- Windows: `%APPDATA.\jukto\config.json`
- Linux: `$XDG_CONFIG_HOME/jukto/config.json` or `~/.config/jukto/config.json`

## Development

Install dependencies:

```bash
npm install
```

Build the CLI:

```bash
npm run build
```

Run from source output:

```bash
npm run dev
```

The package entrypoint is `dist/index.js`, generated from `src/index.ts`. `npm run build` compiles TypeScript and marks the generated entrypoint executable.

## Project Layout

```text
src/
  index.ts              CLI entrypoint and local machine bridge
  ai/                   Codex/OpenCode provider integration
  transport/            Session transport protocol
  libsodium-wrappers.d.ts
```

## Publishing

The package is published as `jukto-cli`. `prepublishOnly` runs the production build before publishing.

```bash
npm publish
```
