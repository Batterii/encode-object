import { EncodeObjectError } from '../../lib/encode-object-error';
import { InvalidJsonError } from '../../lib/invalid-json-error';
import { expect } from 'chai';

describe('InvalidJsonError', function() {
	it('extends BatteriiEncodeObjectError', function() {
		expect(new InvalidJsonError())
			.to.be.an.instanceOf(EncodeObjectError);
	});

	describe('::getDefaultMessage', function() {
		it('returns an appropriate message', function() {
			expect(InvalidJsonError.getDefaultMessage()).to.equal(
				'Invalid JSON',
			);
		});
	});
});
