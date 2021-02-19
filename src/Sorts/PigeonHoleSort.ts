export function pigeonHoleSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}
	const copy = list.slice();

	let min = copy[0];
	let max = copy[0];

	for (let i = 0; i < copy.length; i++) {
		if (copy[i] > max) { max = copy[i]; }
		if (copy[i] < min) { min = copy[i]; }
	}

	const range = max - min + 1;
	const pigeonhole = Array(range).fill(0);

	for (let i = 0; i < copy.length; i++) {
		pigeonhole[copy[i] - min]++;
	}

	let index = 0;

	for (let j = 0; j < range; j++) {
		while (pigeonhole[j]-- > 0) {
			copy[index++] = j + min;
		}
	}
	return copy;
}
