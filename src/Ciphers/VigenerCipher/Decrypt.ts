import { isLetter, isUpperCase } from ".";

export function decrypt(message: string, key: string): string {
	let res = "";
	for (let i = 0, j = 0; i < message.length; i++) {
		const char = message.charAt(i);
		if (isLetter(char)) {
			if (isUpperCase(char)) {
				res += String.fromCharCode(90 - ((25 - (char.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26));
			} else {
				res += String.fromCharCode(122 - ((25 - (char.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26));
			}
		} else {
			res += char;
		}
		j = ++j % key.length;
	}
	return res;
}
