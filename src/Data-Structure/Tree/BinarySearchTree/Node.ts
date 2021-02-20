/* eslint-disable @typescript-eslint/no-unused-expressions */
export class Node {
	private value: number;

	private left: Node | undefined;

	private right: Node | undefined;

	// Node in the tree
	public constructor(val: number) {
		this.value = val;
		this.left;
		this.right;
	}

	// Search the tree for a value
	public search(val: number): Node | null {
		if (this.value === val) {
			return this;
		} if (val < this.value && this.left !== undefined) {
			return this.left.search(val);
		} if (val > this.value && this.right !== undefined) {
			return this.right.search(val);
		}
		return null;
	}

	// Visit a node
	public visit(): void {
		// Recursively go left
		if (this.left !== undefined) {
			this.left.visit();
		}
		// Print out value
		console.log(this.value);
		// Recursively go right
		if (this.right !== undefined) {
			this.right.visit();
		}
	}

	// Add a node
	public addNode(n: Node): Node {
		if (n.value < this.value) {
			if (this.left === undefined) {
				this.left = n;
			} else {
				this.left.addNode(n);
			}
		} else if (n.value > this.value) {
			if (this.right === undefined) {
				this.right = n;
			} else {
				this.right.addNode(n);
			}
		}
		return this;
	}

	public getValue(): number {
		return this.value;
	}
}
