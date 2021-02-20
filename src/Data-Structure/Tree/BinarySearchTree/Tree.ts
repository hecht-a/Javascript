import { Node } from "./Node";

export class Tree {
	private root: Node | undefined;

	public constructor() {
		// Just store the root
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		this.root;
	}

	// Inorder traversal
	public traverse(): Tree {
		if (this.root !== undefined) {
			this.root.visit();
		}
		return this;
	}

	// Start by searching the root
	public search(val: number): boolean {
		const found = this.root
			? this.root.search(val)
			: null;
		if (found !== null) {
			console.log(`Found:${found.getValue()}`);
			return true;
		}
		console.log(`${val} not found`);
		return false;
	}

	// Add a new value to the tree
	public addValue(val: number): Tree {
		const n = new Node(val);
		if (this.root === undefined) {
			this.root = n;
		} else {
			this.root.addNode(n);
		}
		return this;
	}
}
