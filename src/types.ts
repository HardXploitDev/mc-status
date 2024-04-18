interface BaseResponse {
    /**
     * Determines whether the server is online or offline.
     */
    online: boolean;
    /**
     * The hostname of the server that was resolved from the address string.
     */
    host: string;
    /**
     * The port of the server that was resolved from the address string.
     */
    port: number;
    /**
     * This is the IP address that was resolved from the hostname of the server.
     * It is possible that IP resolution can fail, especially if an invalid hostname
     * was provided, so this property may be null.
     */
    ip_address: string | null;
    /**
     * Whether or not this server address has been blocked by Mojang.
     * If this is true, Notchian clients will not be able to connect to the
     * server via the Minecraft client because it previously violated the EULA.
     */
    eula_blocked: boolean;
    /**
     * The timestamp in Unix milliseconds of when the status was retrieved from the Minecraft server itself.
     */
    retrieved_at: number;
    /**
     * The Unix milliseconds timestamp at which the cache will expire for this
     * status. The first proceeding request made after this timestamp will
     * return an up-to-date status of the server.
     */
    expires_at: number;
    /**
     * Information about the amount of online and max players. This property will be missing if the server is offline.
     */
    players: {
        /**
         * The amount of online players in the server.
         */
        online: number;
        /**
         * The maximum number of allowed players in the server.
         */
        max: number;
    };
    /**
     * The message of the day (or MOTD/description) of the server. This is the
     * message shown below the server name in the client multiplayer menu. This
     * property will be missing if the server is offline.
     */
    motd: {
        /**
         * The raw MOTD with formatting codes. Refer to
         * https://minecraft.fandom.com/wiki/Formatting_codes for information on how to use formatting codes.
         */
        raw: string;
        /**
         * A clean text-only version of the MOTD with all formatting codes removed.
         */
        clean: string;
        /**
         * An HTML representation of the MOTD with proper formatting. All formatting
         * codes are supported and are equal to their value in the Minecraft fandom wiki.
         * Magic/obfuscated formatting codes are a <span> with the class `.minecraft-format-obfuscated`.
         * Line breaks are encoded as the "\n" escape code and may be replaced with <br> by the user.
         */
        html: string;
    };
};

export interface BedrockResponse extends BaseResponse {
    /**
     * The default gamemode that players will spawn into when joining the server.
     */
    gamemode: string;
    /**
     * The ID of the server itself. There is little to no documentation
     * online about the use of this value.
     */
    server_id: string;
    /**
     * The type of server that was retrieved. Possible values are "MCPE" for 
     * Bedrock and Pocket Edition, or "MCEE" for Education Edition.
     */
    edition: string;
    /**
     * The version data of the server. This property will be missing if the server is offline.
     */
    version: {
        /**
         * The version name of the server.
         */
        name: string;
        /**
         * The protocol version of the server which is used to identify what client versions are supported.
         */
        protocol: number;
    };
}

export interface JavaResponse extends Omit<BaseResponse, "players"> {
    /**
     * The base64-encoded PNG data of the 64x64 server icon. You may require
     * additional libraries or utilities for using this property. There are
     * several examples out there. This property may be null if the server does
     * not set an icon image. This property will also be missing if the server is offline.
     */
    icon: string | null;
    /**
     * If query lookup is successful, then this property will contain the
     * software that the server is running. This will be missing if the server is offline.
     */
    software: string | null;
    /**
     * The result of the SRV record lookup when acquiring the connection details
     * of the server. This will always be present, even if the server is offline.
     */
    srv_record: {
        /**
         * The hostname returned by the SRV lookup. If the SRV record exists, this
         * is the actual hostname our service used to connect to the server.
         */
        host: string;
        /**
         * The port returned by the SRV lookup.
         */
        port: number;
    };
    /**
     * Any Forge mods loaded if provided by the server. Most servers do not
     * have Forge installed so this property will be empty a majority of the time.
     * Legacy FML and FML2 are supported.
     */
    mods: {
        /**
         * The name of the mod that is loaded on the server.
         */
        name: string;
        /**
         * The version of the mod that is loaded on the server.
         */
        version: string;
    }[];
    /**
     * If query lookup is successful, then this property will contain the
     * list of plugins that the server is running. This will be missing if the server is offline.
     */
    plugins: {
        /**
         * The name of the plugin.
         */
        name: string;
        /**
         * The semantic version of the plugin. This property can also be null.
         */
        version: string | null;
    }[];
    /**
     * The version data of the server. This will be null if the server 
     * version is pre-1.3.2. This property will be missing if the server
     * is offline.
     */
    version: {
        /**
         * The version name of the server, typically modified by the server
         * itself to show version range. This value may contain special formatting
         * characters.
         */
        name_raw: string;
        /**
         * The version name of the server, typically modified by the server
         * itself to show version range. This value will have all formatting
         * characters removed.
         */
        name_clean: string;
        /**
         * The version name of the server, typically modified by the server
         * itself to show version range, as an HTML string with proper
         * formatting applied.
         */
        name_html: string;
        /**
         * The protocol version of the server which is used to identify what client versions are supported.
         */
        protocol: number
    } | null;
    /**
     * Information about the amount of players online and *some* sample
     * players if provided. This property will be missing if the server is offline.
     */
    players: BaseResponse["players"] & {
        /**
         * Some sample players online in the server. Most (if not all) major
         * servers disable this or modify the data for custom formatting. If you
         * do not have any items in this array, it is because the server has
         * disabled sample players for a reason.
         */
        list: {
            /**
             * The UUID of the player logged into the server.
             */
            uuid: string;
            /**
             * The username of the player logged into the server. The server
             * may have plugins that modify this data to show special
             * formatting. This value may have formatting characters.
             */
            name_raw: string;
            /**
             * The username of the player logged into the server. The server
             * may have plugins that modify this data to show special
             * formatting. This value will not have any formatting characters.
             */
            name_clean: string;
            /**
             * The username of the player logged into the server, as an HTML string with proper formatting applied.
             */
            name_html: string;
        }[]
    }
}

export type WhenPlatform<T, A, B> = T extends "java" ? A : B;