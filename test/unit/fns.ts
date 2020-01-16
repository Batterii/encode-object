import { decodeObject, encodeObject } from '../../lib/fns';
import { InvalidJsonError } from '../../lib/invalid-json-error';
import base64url from 'base64url';
import { expect } from 'chai';
import sinon from 'sinon';

describe('fns', function() {
	describe('encodeObject', function() {
		it('stringifies and encodes the object using base64url', function() {
			const obj = { foo: 'bar' };
			const encoded = 'encoded object';
			const encode = sinon.stub(base64url, 'encode').returns(encoded);

			const result = encodeObject(obj);

			expect(encode).to.be.calledOnce;
			expect(encode).to.be.calledWithExactly('{"foo":"bar"}');
			expect(result).to.equal(encoded);
		});
	});

	describe('decodeObject', function() {
		const str = Buffer.from('{"foo":"bar"}').toString('base64');

		it('decodes from base64 and parses as JSON', function() {
			const result = decodeObject(str);

			expect(result).to.deep.equal({ foo: 'bar' });
		});

		it('wraps parsing errors with InvalidJsonError', function() {
			const err = new Error('omg parsing error');
			sinon.stub(JSON, 'parse').throws(err);

			expect(() => {
				decodeObject(str);
			}).to.throw(InvalidJsonError).that.includes({
				shortMessage: InvalidJsonError.getDefaultMessage(),
				cause: err,
				info: null,
			});
		});
	});
});
