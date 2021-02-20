import { SHA } from "./SHA";

/* eslint-disable no-bitwise */
export class SHA1 extends SHA {
	private H0 = 0x67452301;

	private H1 = 0xEFCDAB89;

	private H2 = 0x98BADCFE;

	private H3 = 0x10325476;

	private H4 = 0xC3D2E1F0;

	public constructor(message: string, charSize?: number) {
		super(message, charSize);
	}

	public hash(): string {
		const bits = this.preProcess();
		const chunks = this.chunkify(bits, 512);

		chunks.forEach((chunk) => {
			const words = this.chunkify(chunk, 32);

			for (let i = 16; i < 80; i++) {
				const val = [words[i - 3], words[i - 8], words[i - 14], words[i - 16]]
					.map((e) => parseInt(e, 2))
					.reduce((acc, curr) => curr ^ acc, 0);
				const bin = (val >>> 0).toString(2);
				const paddedBin = this.pad(bin, 32);
				const word = this.rotateLeft(paddedBin, 1);
				words.push(word);
			}
			let [a, b, c, d, e] = [this.H0, this.H1, this.H2, this.H3, this.H4];
			for (let i = 0; i < 80; i++) {
				let f: number;
				let k: number;
				if (i < 20) {
					f = (b & c) | (~b & d);
					k = 0x5A827999;
				} else if (i < 40) {
					f = b ^ c ^ d;
					k = 0x6ED9EBA1;
				} else if (i < 60) {
					f = (b & c) | (b & d) | (c & d);
					k = 0x8F1BBCDC;
				} else {
					f = b ^ c ^ d;
					k = 0xCA62C1D6;
				}
				f >>>= 0;

				const aRot = this.rotateLeft(this.pad(a.toString(2), 32), 5);
				const aInt = parseInt(aRot, 2) >>> 0;
				const wordInt = parseInt(words[i], 2) >>> 0;
				const t = aInt + f + e + k + wordInt;
				e = d >>> 0;
				d = c >>> 0;
				const bRot = this.rotateLeft(this.pad(b.toString(2), 32), 30);
				c = parseInt(bRot, 2) >>> 0;
				b = a >>> 0;
				a = t >>> 0;
			}

			// add values for this chunk to main hash variables (unsigned)
			this.H0 = (this.H0 + a) >>> 0;
			this.H1 = (this.H1 + b) >>> 0;
			this.H2 = (this.H2 + c) >>> 0;
			this.H3 = (this.H3 + d) >>> 0;
			this.H4 = (this.H4 + e) >>> 0;
		});

		// combine hash values of main hash variables and return
		const HH = [this.H0, this.H1, this.H2, this.H3, this.H4]
			.map((e) => e.toString(16))
			.map((e) => this.pad(e, 8))
			.join("");

		return HH;
	}
}
