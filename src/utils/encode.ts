import {Buffer} from "buffer";

export function toHexBytes(bytes: Uint8Array) {
  return `0x${Buffer.from(bytes).toString('hex')}`;
}
