[![npm v0.2.0](https://img.shields.io/badge/npm-v0.2.0-green.svg)](https://www.npmjs.com/package/@hardxploit/mc-status)

# mc-status
Unofficial project of MCStatus.io, a minimalist library that allows you to get information about Minecraft Java or Bedrock servers.

> [!TIP]
> The API used for check server status is from https://mcstatus.io/ (v2).

## Usage
### Requirements
```
NodeJS Version: v16.15.x or higher
NPM Version: v7.x or higher
```
> [!IMPORTANT]
> If you are using NodeJS versions older than v18, you will need to add the `--experimental-fetch` flag when running it, for the package to work correctly. [NodeJS Docs](https://nodejs.org/docs/latest-v18.x/api/globals.html#fetch).

### Install
```
npm install @hardxploit/mc-status --save
```

### Start coding
There are 3 different classes in the module, one general and the other two specific for the two possible platforms. And each one has a function (asynchronous) to obtain the statistics in JSON.
Can be used in JavaScript (CJS and ESM) and TypeScript.
The current version is improved and made by [JustEvil](https://github.com/EvilG-MC), thank you very much for your contribution.

Example code:
```js
import { ServerStatus, BedrockStatus, JavaStatus } from 'mc-status';

(async () => {
    const Server = new ServerStatus('java', 'mc.hypixel.net', 25565);
    const BedrockServer = new BedrockStatus('play.parrotsmp.com');
    const JavaServer = new JavaStatus('mc.hypixel.net');

    const status = await myServer.get();
    const bedrockStatus = await myBedrockServer.get();
    const javaStatus = await myJavaServer.get();

    console.log(status, bedrockStatus.port, javaStatus.online);
})();
```
[Output (JSON)](https://mcstatus.io/docs)

## Package progress
- [x] Get servers status.
- [ ] Get users status.
