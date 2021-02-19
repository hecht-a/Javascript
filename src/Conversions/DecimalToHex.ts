function intToHex(num: number): number | string {
	switch (num) {
		case 10: return "A";
		case 11: return "B";
		case 12: return "C";
		case 13: return "D";
		case 14: return "E";
		case 15: return "F";
		default: return num;
	}
}

export function decimalToHex(num: number): string {
	const hexOut = [];
	let res = num;
	while (res > 15) {
		hexOut.unshift(intToHex(res % 16));
		res = Math.floor(res / 16);
	}
	return intToHex(res) + hexOut.join("");
}
