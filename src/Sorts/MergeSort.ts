function merge<T extends number | undefined>(list1: T[], list2: T[]): (T | undefined)[] {
	const results = [];

	while (list1.length && list2.length) {
		if (list1[0] <= list2[0]) {
			results.push(list1.shift());
		} else {
			results.push(list2.shift());
		}
	}
	return results.concat(list1, list2);
}

/**
 * Break down the lists into smaller pieces to be merged
 * @param {Array} list - list to be sorted
 * @return {Array} sorted list
 */
export function mergeSort(list: number[]): (number | undefined)[] {
	if (list.length === 0) {
		return list;
	}

	const listHalf = Math.floor(list.length / 2);
	const subList1 = list.slice(0, listHalf);
	const subList2 = list.slice(listHalf, list.length);

	return merge(mergeSort(subList1), mergeSort(subList2));
}
