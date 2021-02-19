export function gnomeSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	const copy = list.slice();
	let i = 1;

	while (i < copy.length) {
		if (copy[i - 1] <= copy[i]) {
			i++;
		} else {
			[copy[i], copy[i - 1]] = [copy[i - 1], copy[i]];

			i = Math.max(1, i - 1);
		}
	}
	return copy;
}
