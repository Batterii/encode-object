import { decodeObject, encodeObject } from '../../lib';
import { expect } from 'chai';

describe('encode-object (Integration)', function() {
	it('encodes and decodes plain objects', function() {
		const original = { foo: 'foo', bar: true, baz: false, qux: null };
		const str = encodeObject(original);
		expect(decodeObject(str)).to.deep.equal(original);
	});

	it('encodes and decodes a top-level string', function() {
		const original = 'omg it\'s a string';
		const str = encodeObject(original);
		expect(decodeObject(str)).to.equal(original);
	});

	it('encodes and decodes a top-level number', function() {
		const original = 42;
		const str = encodeObject(original);
		expect(decodeObject(str)).to.equal(original);
	});

	it('encodes and decodes a top-level true', function() {
		expect(decodeObject(encodeObject(true))).to.be.true;
	});

	it('encodes and decodes a top-level false', function() {
		expect(decodeObject(encodeObject(false))).to.be.false;
	});

	it('encodes and decodes a top-level null', function() {
		expect(decodeObject(encodeObject(null))).to.be.null;
	});
});
