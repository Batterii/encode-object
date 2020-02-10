import { BatteriiError } from '@batterii/errors';
import { EncodeObjectError } from '../../lib/encode-object-error';
import { expect } from 'chai';

describe('BatteriiEncodeObjectError', function() {
	it('extends BatteriiError', function() {
		expect(new EncodeObjectError()).to.be.an.instanceOf(BatteriiError);
	});
});
