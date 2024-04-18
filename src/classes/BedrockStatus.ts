// Importing the base status class.
import { BedrockResponse } from "../types";
import { ServerStatus } from "./Status";

// Get the status of Bedrock (platform) servers.
export class BedrockStatus extends ServerStatus<"bedrock"> {
    /**
     * 
     * Get the information about a specific bedrock server,
     * @param ipAddress 
     * @param port 
     */
    constructor(ipAddress: string, port: number = 19132) {
        super('bedrock', ipAddress, port);
    }

    /**
     * 
     * Get the data.
     * @returns 
     */
    async get(): Promise<BedrockResponse> {
        const url = `https://api.mcstatus.io/v2/status/${this.platform}/${this.ipAddress}:${this.port}`;
        const data = await fetch(url).then((res) => res.json());
        return data;
    }
}