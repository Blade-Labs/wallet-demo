export function toHexBytes(bytes: Uint8Array) {

  return '0x' + Array.prototype.map.call(bytes, (v: number) => (v & 0xff).toString(16)).join('');

}
