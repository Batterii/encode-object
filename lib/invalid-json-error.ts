import { BatteriiEncodeObjectError } from './batterii-encode-object-error';

/**
 * Error class indicating that invalid json was passed to decodeObject.
 */
export class InvalidJsonError extends BatteriiEncodeObjectError {
	static getDefaultMessage(): string {
		return 'Invalid JSON';
	}
}
