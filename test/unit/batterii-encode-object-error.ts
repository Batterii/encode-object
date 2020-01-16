import { BatteriiEncodeObjectError }
	from '../../lib/batterii-encode-object-error';
import { NaniError } from 'nani';
import { expect } from 'chai';

describe('BatteriiEncodeObjectError', function() {
	it('extends NaniError', function() {
		expect(new BatteriiEncodeObjectError()).to.be.an.instanceOf(NaniError);
	});
});
