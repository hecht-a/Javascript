import { isSorted } from "../utils/isSorted";

export function combSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	const copy = list.slice();

	const shrink = 1.3;
	let gap = copy.length;
	let i = 1;

	while (gap > 1 || !isSorted(copy)) {
		gap = Number.parseInt(String(gap / shrink), 10);
		i = 0;

		while (gap + i < copy.length) {
			if (copy[i] > copy[i + gap]) {
				[copy[i], copy[i + gap]] = [copy[i + gap], copy[i]];
			}
			i += 1;
		}
	}
	return copy;
}
