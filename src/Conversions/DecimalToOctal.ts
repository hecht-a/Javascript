export function decimalToOctal(num: number): number {
	let oct = 0;
	let c = 0;
	let res = num;
	while (res > 0) {
		const r = res % 8;
		oct += (r * (10 ** c++));
		res = Math.floor(res / 8);
	}
	return oct;
}
