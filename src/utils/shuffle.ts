export function shuffle(list: number[]): number[] {
	const copy = list.slice();
	for (let i = copy.length; i; i--) {
		const m = Math.floor(Math.random() * i);
		const n = copy[i - 1];
		copy[i - 1] = copy[m];
		copy[m] = n;
	}
	return copy;
}
