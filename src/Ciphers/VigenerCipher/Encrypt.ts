import { isLetter, isUpperCase } from ".";

export function encrypt(message: string, key: string): string {
	let res = "";

	for (let i = 0, j = 0; i < message.length; i++) {
		const char = message.charAt(i);
		if (isLetter(char)) {
			if (isUpperCase(char)) {
				res += String.fromCharCode(((char.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26) + 65);
			} else {
				res += String.fromCharCode(((char.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26) + 97);
			}
		} else {
			res += char;
		}
		j = ++j % key.length;
	}
	return res;
}
