import { BatteriiEncodeObjectError }
	from '../../lib/batterii-encode-object-error';
import { BatteriiError } from '@batterii/errors';
import { expect } from 'chai';

describe('BatteriiEncodeObjectError', function() {
	it('extends BatteriiError', function() {
		expect(new BatteriiEncodeObjectError())
			.to.be.an.instanceOf(BatteriiError);
	});
});
