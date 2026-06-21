<div align="center">
  <a href="https://jukto.pw">
    <picture>
      <source srcset="https://jukto.pw/img/github/github-main-dark.png" media="(prefers-color-scheme: dark)" width="600">
      <source srcset="https://jukto.pw/img/github/github-main-light.png" media="(prefers-color-scheme: light)" width="600">
      <img src="https://jukto.pw/img/github/github-main-dark.png" alt="Jukto">
    </picture>
  </a>
</div><br />
<p align="center">AI-powered mobile IDE and cloud development platform. Code on your phone, run on your machine or in secure cloud sandboxes.</p> <br />

## Structure

| Directory | Description |
|-----------|-------------|
| `app/` | Expo/React Native mobile app |
| `cli/` | CLI tool (`jukto-cli`) |
| `manager/` | Manager server |
| `proxy/` | Proxy server |
| `pty/` | Rust PTY binary uses wezterm internal libs for rendering |

<br />

## Usage

This can be used in two ways, both are for coding:

- Jukto Connect: One is when you want to remotely use pc without dealing with ssh and shit, geared towards coding
- Jukto Cloud: Coming soon

<br /> 

## App

Mobile app for iOS/Android/Web built with Expo. App is just a dumb client with most logic on cli and app just acting as a rendering client.

- File explorer and editor
- Git integration
- Terminal emulator
- Process management

### Supported Languages (22)

`en`, `zh`, `ja`, `ko`, `es`, `pt`, `de`, `fr`, `vi`, `ru`, `id`, `pl`, `tr`, `it`, `nl`, `sv`, `uk`, `fi`, `zh-TW`, `tw`, `ms`, `es-MX`

<br />

## CLI

Node.js CLI that bridges your local machine to the app via WebSocket. Can be ran using `npx jukto-cli`

- Filesystem operations (read, write, grep, etc.)
- Git commands (status, commit, push, pull, etc.)
- Terminal spawning
- Process management
- Port scanning
- System monitoring (CPU, memory, disk, battery)

```bash
npx jukto-cli
```

<br />

## Manager and Proxy

Bun-based WebSocket relay server that connects CLI and app using session codes. Public verion deployed on proxy.jukto.pw

- Session management with 10-min TTL
- Dual-channel architecture (control + data)
- QR code pairing

<br />

## PTY

Rust binary for pseudo-terminal management, used by the CLI.

- Real PTY sessions via `wezterm` fork on github.com/sohzm/wezterm
- Screen buffer as cell grid (char + fg + bg per cell)
- 24fps render loop (only sends updates when content changes)
- JSON line protocol over stdin/stdout

<br />

## 📄 License

MIT: See [LICENSE](LICENSE) for details.

<br />

## Star History

<a href="https://www.star-history.com/#jukto-dev/jukto&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=jukto-dev/jukto&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=jukto-dev/jukto&type=Timeline" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=jukto-dev/jukto&type=Timeline" />
 </picture>
</a>
