/* eslint-disable no-unused-vars */
import * as winston from 'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
import { Driver } from '../index';

let driver: Driver;

export default () => {
  if (driver) return driver;

  const consoleTransport: ConsoleTransportInstance = new winston.transports.Console();

  driver = {
    exceptionHandlers: [consoleTransport],
    transports: [consoleTransport],
  };

  return driver;
};
