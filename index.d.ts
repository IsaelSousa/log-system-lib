import { startLog } from './lib/socket';

declare function trace(message: string): void
declare function debug(message: string): void
declare function info(message: string): void
declare function warn(message: string): void
declare function error(message: string): void
declare function fatal(message: string): void

export = { 
    startLog,
    trace,
    debug,
    info,
    warn,
    error,
    fatal
 }
