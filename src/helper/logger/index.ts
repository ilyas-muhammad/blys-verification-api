/* eslint-disable no-unused-vars */
import * as Transports from 'winston-transport';
import log from './log';

export interface Driver {
  exceptionHandlers: Transports[];
  transports: Transports[];
}

export { log };
