// Importing 'apiUrl' to get the url.
import { status } from "./status";

// Get the status of Bedrock (platform) servers.
export class javaStatus extends status {
    constructor(ipAddress: string, port?: number) {
        super('java', ipAddress, port || 25565);
    }

    async get(): Promise<any> {
        let url = `https://api.mcstatus.io/v2/status/${this.platform}/${this.ipAddress}:${this.port}`;
        return await fetch(url)
            .then(data => data.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error);
            });
    }
}