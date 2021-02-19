export function beadSort(list: number[]): number[] {
	if (list.length === 0) {
		return list;
	}

	if (list.some((number) => number < 0)) {
		throw new RangeError("Sequence must be a liste of positive integers.");
	}

	// eslint-disable-next-line no-irregular-whitespace
	const grid = list.map((nbr) => {
		const maxArr: number[] = new Array(Math.max(...list));
		for (let i = 0; i < nbr; i++) {
			maxArr[i] = -1;
		}
		return maxArr;
	});

	for (let col = 0; col < Math.max(...list); col++) {
		let count = 0;

		for (let row = 0; row < list.length; row++) {
			if (grid[row][col] === -1) {
				count++;
			}
		}

		for (let row = list.length - 1; row > -1; row--) {
			if (count) {
				grid[row][col] = -1;
				count--;
			} else {
				(grid[row][col] as unknown as undefined) = undefined;
			}
		}
	}

	const sortedList = grid.map((array) => array.filter((value: number) => value === -1).length);

	return sortedList;
}
