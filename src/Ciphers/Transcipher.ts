export function transcipher(text: string): string {
	const originalCharacterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const toBeMappedCharaterList = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
	const index = (x: string): number => originalCharacterList.indexOf(x);
	const replace = (x: string): string => (index(x) > -1
		? toBeMappedCharaterList[index(x)]
		: x);
	return text.split("").map(replace).join("");
}
