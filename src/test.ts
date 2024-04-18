import { ServerStatus, BedrockStatus, JavaStatus } from './index';

(async () => {
    const data = new ServerStatus('java', 'mc.hypixel.net', 25565);
    const bedrockData = new BedrockStatus('play.parrotsmp.com');
    const javaData = new JavaStatus('mc.hypixel.net');

    const a = await data.get();
    const b = await bedrockData.get();
    const c = await javaData.get();

    console.log(a.online, b.ip_address, c.players.online);
})();
