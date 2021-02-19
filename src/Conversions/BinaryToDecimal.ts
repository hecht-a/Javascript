// last version
// export function binaryToDecimal(binaryString: string): number {
// 	let decimalNumber = 0;
// 	const binaryDigits = binaryString.split("").reverse();
// 	binaryDigits.forEach((binaryDigit, index) => {
// 		decimalNumber += Number.parseInt(binaryDigit, 10) * (2 ** index);
// 	});
// 	return decimalNumber;
// }

export function binaryToDecimal(binary: string): number {
	return binary
		.split("")
		.reverse()
		.map((digit, i) => Number.parseInt(digit, 10) * (2 ** i))
		.reduce((acc, cur) => acc + cur);
}
