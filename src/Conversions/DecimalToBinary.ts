export function decimalToBinary(num: number): string {
	const bin = [];
	let res = num;
	while (res > 0) {
		bin.unshift(res % 2);
		// eslint-disable-next-line no-bitwise
		res >>= 1; // basically /= 2 without remainder if any
	}
	return bin.join("");
}
