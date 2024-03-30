import { status, bedrockStatus, javaStatus } from './index';

let data = new status('java', 'mc.hypixel.net', 25565);
let bedrockData = new bedrockStatus('play.parrotsmp.com');
let javaData = new javaStatus('mc.hypixel.net');

async function x(): Promise<any> {
    let a = await data.get();
    let b = await bedrockData.get();
    let c = await javaData.get();

    console.log(a.online, b.ip_address, c.players.online);
};

x()