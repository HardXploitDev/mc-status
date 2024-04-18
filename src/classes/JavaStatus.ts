// Importing 'apiUrl' to get the url.
import { JavaResponse } from "../types";
import { ServerStatus } from "./Status";

// Get the status of Java (platform) servers.
export class JavaStatus extends ServerStatus<"java"> {
    /**
     * 
     * Get the information about a specific bedrock server,
     * @param ipAddress 
     * @param port 
     */
    constructor(ipAddress: string, port: number = 25565) {
        super('java', ipAddress, port);
    }

    /**
     * 
     * Get the data.
     * @returns 
     */
    async get(): Promise<JavaResponse> {
        const url = `https://api.mcstatus.io/v2/status/${this.platform}/${this.ipAddress}:${this.port}`;
        const data = await fetch(url).then((res) => res.json());
        return data;
    }
}