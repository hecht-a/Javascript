export function palindrome(text: string): boolean {
	return text.length !== 0 && text === [...text].reverse().join("");
}
