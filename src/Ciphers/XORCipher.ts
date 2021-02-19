// last version
// export function XORCipher(str: string, key: number): string {
// 	let res = "";
// 	for (const char of str) {
// 		res += String.fromCharCode(char.charCodeAt(0) ^ key);
// 	}
// 	return res;
// }

export function XORCipher(str: string, key: number): string {
	return [...str].map((char) => (char === " "
		? " "
		// eslint-disable-next-line no-bitwise
		:		 String.fromCharCode(char.charCodeAt(0) ^ key))).join("");
}
