import { BatteriiError } from '@batterii/errors';

/**
 * Base class for all errors defined by @batterii/encode-object.
 *
 * @remarks
 * This class, as well as all other error classes in this project, inherit from
 * [NaniError](https://sripberger.github.io/nani/#nanierror) and may use any of
 * the constructor arguments of that class.
 */
export class EncodeObjectError extends BatteriiError {}
