export class Queue<T> {
	private queue: T[];

	public constructor(queue?: T[]) {
		this.queue = queue || [];
	}

	/**
   * Add a value to the end of the queue
	 * @param  {T} item
	 * @returns void
	 */
	public enqueue(item: T): Queue<T> {
		this.queue.push(item);
		return this;
	}

	/**
   * Removes the value at the front of the queue
	 * @returns T
	 */
	public dequeue(): Queue<T> {
		if (this.queue.length === 0) {
			throw new Error("Queue is Empty");
		}
		this.queue.splice(0, 1);
		return this;
	}

	/**
   * Return the length of the queue
	 * @returns number
	 */
	public length(): number {
		return this.queue.length;
	}

	/**
   * Return the item at the front of the queue
	 * @returns T
	 */
	public peek(): T {
		return this.queue[0];
	}

	/**
   * List all the items in the queue
	 * @returns void
	 */
	public get(): T[] {
		return this.queue;
	}
}
