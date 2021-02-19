import { Node } from "./Node";

export class BinaryTree {
	root: Node;

	traversal: number[];

	constructor() {
		this.root = new Node(0);
		this.traversal = [];
	}

	breadthFirst(): string {
		const h = this.getHeight(this.root);
		for (let i = 1; i <= h; i++) {
			this.traverseLevel(this.root, i);
		}
		return this.traversal.toLocaleString();
	}

	getHeight(node: Node): number {
		if (node === null) {
			return 0;
		}
		const lHeight = this.getHeight(node.left);
		const rHeight = this.getHeight(node.right);
		return lHeight > rHeight
			? lHeight + 1
			: rHeight + 1;
	}

	traverseLevel(node: Node, level: number): void {
		if (node === null) {
			return;
		}
		if (level === 1) {
			this.traversal.push(node.data);
		} else {
			this.traverseLevel(node.left, level - 1);
			this.traverseLevel(node.right, level - 1);
		}
	}
}
