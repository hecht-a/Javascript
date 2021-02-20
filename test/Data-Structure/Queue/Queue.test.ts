import { Queue } from "../../../src/Data-Structure/Queue/Queue";

describe(Queue, () => {
	describe("Creating queues", () => {
		it("Should create a queue of number values with queue given", () => {
			const queue1 = new Queue([1, 2, 3, 4]);
			expect(queue1.get()).toStrictEqual([1, 2, 3, 4]);

			const queue2 = new Queue();
			queue2.enqueue(1).enqueue(2).enqueue(3).enqueue(4);
			expect(queue2.get()).toStrictEqual([1, 2, 3, 4]);
		});

		it("Should create a queue of string values with queue given", () => {
			const queue1 = new Queue(["a", "b", "c", "d"]);
			expect(queue1.get()).toStrictEqual(["a", "b", "c", "d"]);

			const queue2 = new Queue();
			queue2.enqueue("a").enqueue("b").enqueue("c").enqueue("d");
			expect(queue2.get()).toStrictEqual(["a", "b", "c", "d"]);
		});

		it("Should create a queue of array values with queue given", () => {
			const queue1 = new Queue([["a", "b"], ["c", "d"]]);
			expect(queue1.get()).toStrictEqual([["a", "b"], ["c", "d"]]);

			const queue2 = new Queue();
			queue2.enqueue(["a", "b"]).enqueue(["c", "d"]);
			expect(queue2.get()).toStrictEqual([["a", "b"], ["c", "d"]]);
		});

		it("Should create a queue of mixed values with queue given", () => {
			const queue1 = new Queue(["a", 1, ["c", 2], { 1: "a" }]);
			expect(queue1.get()).toStrictEqual(["a", 1, ["c", 2], { 1: "a" }]);

			const queue2 = new Queue();
			queue2.enqueue("a").enqueue(1).enqueue(["c", 2]).enqueue({ 1: "a" });
			expect(queue2.get()).toStrictEqual(["a", 1, ["c", 2], { 1: "a" }]);
		});
	});

	describe("Applying methods to queues", () => {
		it("should delete the value at the first position in the queue", () => {
			const queue1 = new Queue(["a", 1, ["c", 2], { 1: "a" }]);
			expect(queue1.get()).toStrictEqual(["a", 1, ["c", 2], { 1: "a" }]);

			const queue2 = new Queue();
			queue2.enqueue("a").enqueue(1).enqueue(["c", 2]).enqueue({ 1: "a" });
			expect(queue2.dequeue().get()).toStrictEqual([1, ["c", 2], { 1: "a" }]);
		});
	});
});
