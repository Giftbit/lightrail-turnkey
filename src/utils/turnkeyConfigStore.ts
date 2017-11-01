import {TurnkeyConfig} from "./TurnkeyConfig";
import * as kvsAccess from "./kvsAccess";

const TURNKEY_PUBLIC_CONFIG_KEY = "turnkey_config";

export async function getConfig(apiKey: string): Promise<TurnkeyConfig> {
    return await kvsAccess.kvsGet(apiKey, TURNKEY_PUBLIC_CONFIG_KEY) as TurnkeyConfig
}
