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
npm install mc-status --save
```

### Start coding
There are 3 different classes in the module, one general and the other two specific for the two possible platforms. And each one has a function (asynchronous) to obtain the statistics in JSON.

Example code:
```js
const { status, bedrockStatus, javaStatus } = require('mc-status');

// 'status' needs 3 args: platform (java/bedrock), ipAddress and the port.
const myServer = new status('java', 'localhost', 25565);

// 'bedrockStatus' and 'javaStatus', you can just give ipAddress or also the port.
const myBedrockServer = new bedrockStatus('localhost', 19132);
const myJavaServer = new javaStatus('localhost');

// Getting stats (2 possible ways to do).

// #1
async function getStats() {
    let myStats = await myServer.get();
    let myBedrockStats = await myBedrockServer.get();
    let myJavaStats = await myJavaServer.get();

    console.log(myStats, myBedrockStats, myJavaStats);
}

// #2
myServer.get().then(data => console.log(data));
myBedrockServer.get().then(data => console.log(data));
myJavaServer.get().then(data => console.log(data));
```
[Output (JSON)](https://mcstatus.io/docs)

## Package progress
- [x] Get servers status.
- [ ] Get users status.
