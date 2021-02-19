import { isSorted } from "../utils/isSorted";
import { shuffle } from "../utils/shuffle";

export function bogoSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	let copy = list.slice();
	while (!isSorted(copy)) {
		copy = shuffle(copy);
	}
	return copy;
}
