/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable no-bitwise */
import { SHA } from "./SHA";

export class SHA256 extends SHA {
	private H0 = 0x6a09e667;

	private H1 = 0xbb67ae85;

	private H2 = 0x3c6ef372;

	private H3 = 0xa54ff53a;

	private H4 = 0x510e527f;

	private H5 = 0x9b05688c;

	private H6 = 0x1f83d9ab;

	private H7 = 0x5be0cd19;

	private K = [
		0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
		0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
		0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
		0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
		0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
		0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
		0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
		0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
	];

	public constructor(message: string, charSize?: number) {
		super(message, charSize);
	}

	public hash(): string {
		const bits = this.preProcess();
		const chunks = this.chunkify(bits, 512);

		chunks.forEach((chunk) => {
			const words = this.chunkify(chunk, 32);

			for (let i = 16; i < 64; i++) {
				const W1 = words[i - 15];
				const W2 = words[i - 2];
				const R1 = this.rotateRight(W1, 7);
				const R2 = this.rotateRight(W1, 18);
				const R3 = this.rotateRight(W2, 17);
				const R4 = this.rotateRight(W2, 19);
				const S0 = parseInt(R1, 2) ^ parseInt(R2, 2) ^ (parseInt(W1, 2) >>> 3);
				const S1 = parseInt(R3, 2) ^ parseInt(R4, 2) ^ (parseInt(W2, 2) >>> 10);
				const val = parseInt(words[i - 16], 2) + S0 + parseInt(words[i - 7], 2) + S1;
				words[i] = this.pad((val >>> 0).toString(2), 32);
			}

			let [a, b, c, d, e, f, g, h] = [this.H0, this.H1, this.H2, this.H3, this.H4, this.H5, this.H6, this.H7];

			for (let i = 0; i < 64; i++) {
				const S1 = [6, 11, 25]
					.map((turns) => this.rotateRight(this.pad(e.toString(2), 32), turns))
					.map((bitstring) => parseInt(bitstring, 2))
					.reduce((acc, curr) => acc ^ curr, 0) >>> 0;
				const CH = ((e & f) ^ (~e & g)) >>> 0;
				const temp1 = (h + S1 + CH + this.K[i] + parseInt(words[i], 2)) >>> 0;
				const S0 = [2, 13, 22]
					.map((turns) => this.rotateRight(this.pad(a.toString(2), 32), turns))
					.map((bitstring) => parseInt(bitstring, 2))
					.reduce((acc, curr) => acc ^ curr, 0) >>> 0;
				const maj = ((a & b) ^ (a & c) ^ (b & c)) >>> 0;
				const temp2 = (S0 + maj) >>> 0;

				h = g;
				g = f;
				f = e;
				e = (d + temp1) >>> 0;
				d = c;
				c = b;
				b = a;
				a = (temp1 + temp2) >>> 0;
			}

			this.H0 = (this.H0 + a) >>> 0;
			this.H1 = (this.H1 + b) >>> 0;
			this.H2 = (this.H2 + c) >>> 0;
			this.H3 = (this.H3 + d) >>> 0;
			this.H4 = (this.H4 + e) >>> 0;
			this.H5 = (this.H5 + f) >>> 0;
			this.H6 = (this.H6 + g) >>> 0;
			this.H7 = (this.H7 + h) >>> 0;
		});

		const HH = [this.H0, this.H1, this.H2, this.H3, this.H4, this.H5, this.H6, this.H7]
			.map((e) => e.toString(16))
			.map((e) => this.pad(e, 8))
			.join("");
		return HH;
	}
}
