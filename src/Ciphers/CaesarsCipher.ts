export function rot13(str: string): string {
	const response: string[] = [];

	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);

		if (char < 65 || (char > 90 && char < 97) || char > 122) {
			response.push(str.charAt(i));
		} else if ((char > 77 && char <= 90) || (char > 109 && char <= 122)) {
			response.push(String.fromCharCode(str.charCodeAt(i) - 13));
		} else {
			response.push(String.fromCharCode(str.charCodeAt(i) + 13));
		}
	}
	return response.join("");
}
