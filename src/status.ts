// API Base link, using v2 of the API because v1 is deprecated.

// This will return the API url that will be requested.
export class status {
    platform: 'bedrock' | 'java';
    ipAddress: string;
    port: number;

    constructor(platform: 'bedrock' | 'java', ipAddress: string, port: number) {
        this.platform = platform;
        this.ipAddress = ipAddress;
        this.port = port;
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