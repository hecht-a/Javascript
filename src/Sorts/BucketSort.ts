export function bucketSort(list: number[], size = 5): number[] {
	if (list.length === 0) {
		return list;
	}

	let min = list[0];
	let max = list[0];

	for (let i = 0; i < list.length; i++) {
		if (list[i] < min) {
			min = list[i];
		} else if (list[i] > max) {
			max = list[i];
		}
	}

	const count = Math.floor((max - min) / size) + 1;

	const buckets: number[][] = [];
	for (let iCount = 0; iCount < count; iCount++) {
		buckets.push([]);
	}

	for (let i = 0; i < list.length; i++) {
		const key = Math.floor((list[i] - min) / size);
		buckets[key].push(list[i]);
	}
	const sorted: number[] = [];

	for (let i = 0; i < buckets.length; i++) {
		const arr = buckets[i].sort();
		for (let j = 0; j < arr.length; j++) {
			sorted.push(arr[j]);
		}
	}
	return sorted;
}
