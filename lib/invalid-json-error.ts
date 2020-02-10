import { EncodeObjectError } from './encode-object-error';

/**
 * Error class indicating that invalid json was passed to decodeObject.
 */
export class InvalidJsonError extends EncodeObjectError {
	static getDefaultMessage(): string {
		return 'Invalid JSON';
	}
}
