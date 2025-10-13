<div align="center">
  <img src="https://oss.xiaohe.ink/images/virtual-crypto-key.png" width="160" alt="logo"/>
  <h1>Virtual Crypto Key</h1>
  <span>🔑 A JavaScript key management library built on virtual modules</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![License][license-src]][license-href]

Obfuscate and split the key, then merge it at runtime via a virtual module to prevent plaintext key exposure.

## 🚁 Installation

```shell
# pnpm
pnpm add crypto-splitter
pnpm add -D rollup-plugin-crypto-key
# or: pnpm add -D unplugin-crypto-key

# yarn
yarn add crypto-splitter
yarn add --dev rollup-plugin-crypto-key
# or: yarn add --dev unplugin-crypto-key

# npm
npm install crypto-splitter
npm install -D rollup-plugin-crypto-key
# or: npm install -D unplugin-crypto-key
```

## 🛹 Usage

Setup the plugin, using Vite as an example.

```typescript
// vite.config.(js|ts)

import CryptoKey from "rollup-plugin-crypto-key";
// or: import CryptoKey from "unplugin-crypto-key/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    CryptoKey({
      keys: {
        DEMO_KEY1: "iamxiaohe",
        DEMO_KEY2: "ilovexiaohe"
      }
    })
  ]
});
```

> For other build tools, please refer to [unplugin-starter](https://github.com/unplugin/unplugin-starter#install).

Simply import the keys from `virtual:crypto-key`.

```typescript
import { DEMO_KEY1, DEMO_KEY2 } from "virtual:crypto-key";

console.log(DEMO_KEY1); // iamxiaohe
console.log(DEMO_KEY2); // ilovexiaohe
```

For TypeScript support

1. Enable `options.dts` so that `crypto-key.d.ts` file is automatically generated.
2. Make sure `crypto-key.d.ts` is not excluded in `tsconfig.json`.

```typescript
// vite.config.(js|ts)

CryptoKey({
  dts: true // or "xxx.d.ts"
})
```

```json5
// tsconfig.json

{
  "include": [
    // ...
    "crypto-key.d.ts"
  ]
}
```

It can also be used with environment variables.

```typescript
// vite.config.(js|ts)

import process from "node:process";
import CryptoKey from "rollup-plugin-crypto-key";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      CryptoKey({
        keys: {
          DEMO_KEY: env.VITE_DEMO_KEY
        }
      })
    ]
  };
});
```

```dotenv
# .env.development

VITE_DEMO_KEY=iamxiaohe
```

```dotenv
# .env.production

VITE_DEMO_KEY=ilovexiaohe
```

```typescript
import { DEMO_KEY } from "virtual:crypto-key";

// development -> iamxiaohe
// production -> ilovexiaohe
console.log(DEMO_KEY);

// ❌ Avoid using `import.meta.env`, the plugin won't process keys accessed this way
// console.log(import.meta.env.DEMO_KEY);
```

> [!CAUTION]
> 🚨 Client-side protection can't guarantee absolute security,
> It only increases the difficulty of being cracked. For stronger security,
> it should be combined with other protective measures.

## 🐶 Discussion & Communication

- ❓：For questions or bug feedback, you can submit an [issues](https://github.com/xiaohe0601/virtual-crypto-key/issues)
  and PR are welcome
- 📫：[xiaohe0601@outlook.com](mailto:xiaohe0601@outlook.com)
- 🐧：Not yet available

## 🏆 License

MIT [LICENSE](./LICENSE)

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/virtual-crypto-key?style=flat&color=3292fe&labelColor=18181b&logo=github
[github-stars-href]: https://github.com/xiaohe0601/virtual-crypto-key
[license-src]: https://img.shields.io/github/license/xiaohe0601/virtual-crypto-key.svg?style=flat&color=3292fe&labelColor=18181b
[license-href]: https://github.com/xiaohe0601/virtual-crypto-key/blob/main/LICENSE