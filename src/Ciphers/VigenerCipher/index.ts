export function isLetter(char: string): boolean | RegExpMatchArray | null {
	return char.length === 1 && char.match(/[a-zA-Z]/i);
}

export function isUpperCase(char: string): boolean {
	return char === char.toUpperCase();
}
