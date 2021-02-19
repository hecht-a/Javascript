export function countingSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}
	const copy = list.slice();
	const min = Math.min(...copy);
	const max = Math.max(...copy);
	let z = 0;
	const count: number[] = [];

	for (let i = min; i <= max; i++) {
		count[i] = 0;
	}

	for (let i = 0; i < copy.length; i++) {
		count[copy[i]]++;
	}

	for (let i = min; i <= max; i++) {
		while (count[i]-- > 0) {
			copy[z++] = i;
		}
	}
	return copy;
}
