export function transcipher(text: string): string {
	const originalCharacterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const toBeMappedCharaterList = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
	const index = (x: string): number => originalCharacterList.indexOf(x);
	return text
		.split("")
		.map((x) => (index(x) > -1
			? toBeMappedCharaterList[index(x)]
			: x))
		.join("");
}
