// This will return the API url that will be requested.

import { BedrockResponse, JavaResponse, WhenPlatform } from "../types";

export class ServerStatus<P extends 'bedrock' | 'java'> {
    readonly platform: P;
    readonly ipAddress: string;
    readonly port: number;

    /**
     * 
     * Obtain information about a specific Java or Bedrock server.
     * @param platform 
     * @param ipAddress 
     * @param port 
     */
    constructor(platform: P, ipAddress: string, port: number) {
        this.platform = platform;
        this.ipAddress = ipAddress;
        this.port = port;
    }

    /**
     * 
     * Get the data.
     * @returns 
     */
    async get(): Promise<WhenPlatform<P, JavaResponse, BedrockResponse>> {
        const url = `https://api.mcstatus.io/v2/status/${this.platform}/${this.ipAddress}:${this.port}`;
        const data = await fetch(url).then((res) => res.json());
        return data;
    }
}