export function heapify(list: number[], index: number, size: number): number[] {
	let copy = list.slice();

	let largest = index;
	const leftIndex = 2 * index + 1;
	const rightIndex = 2 * index + 2;

	if (leftIndex < size && copy[leftIndex] > copy[largest]) {
		largest = leftIndex;
	}

	if (rightIndex < size && copy[rightIndex] > copy[largest]) {
		largest = rightIndex;
	}

	if (largest !== index) {
		const temp = copy[largest];
		copy[largest] = copy[index];
		copy[index] = temp;

		copy = heapify(copy, largest, size);
	}
	return copy;
}
