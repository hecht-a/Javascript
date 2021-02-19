export function shellSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}
	const copy = list.slice();
	let interval = 1;

	while (interval < copy.length / 3) {
		interval = interval * 3 + 1;
	}

	while (interval > 0) {
		for (let outer = interval; outer < copy.length; outer++) {
			const value = copy[outer];
			let inner = outer;

			while (inner > interval - 1 && copy[inner - interval] >= value) {
				copy[inner] = copy[inner - interval];
				inner -= interval;
			}
			copy[inner] = value;
		}
		interval = (interval - 1) / 3;
	}
	return copy;
}
