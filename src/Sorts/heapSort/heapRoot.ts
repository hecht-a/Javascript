import { swap } from "../../utils/swap";

export function heapRoot(list: number[], i: number, arrayLength: number): number[] {
	let copy = list.slice();
	const left = 2 * i + 1;
	const right = 2 * i + 2;
	let max = i;

	if (left < arrayLength && copy[left] > copy[max]) {
		max = left;
	}

	if (right < arrayLength && copy[right] > copy[max]) {
		max = right;
	}

	if (max !== i) {
		copy = swap(copy, i, max);
		copy = heapRoot(copy, max, arrayLength);
	}
	return copy;
}
