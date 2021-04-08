export interface Logger {
  debug(message: string, meta?: Record<string, any>): any;
  info(message: string, meta?: Record<string, any>): any;
  warn(message: string, meta?: Record<string, any>): any;
  error(message: string, meta?: Record<string, any>): any;
}

export type LogLevel = 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR';

const severities: LogLevel[] = ['DEBUG', 'INFO', 'WARNING', 'ERROR'];

export type LogFunction = (level: LogLevel, message: string, meta?: Record<string, any>) => any;

/**
 * Log messages using `console.error` and basic formatting
 */
function defaultLogFunction(level: LogLevel, message: string, meta?: Record<string, any>): void {
  console.error(`[${level}]`, message, meta);
}

/**
 * Default worker logger - uses @link{defaultLogFunction} to log messages to @link{console.error}.
 * See constructor arguments for customization.
 */
export class DefaultLogger implements Logger {
  protected readonly severity: number;

  constructor(public readonly level: LogLevel = 'INFO', protected readonly logFunction = defaultLogFunction) {
    this.severity = severities.indexOf(this.level);
  }

  log(level: LogLevel, message: string, meta?: Record<string, any>): void {
    if (severities.indexOf(level) >= this.severity) {
      this.logFunction(level, message, meta);
    }
  }

  public debug(message: string, meta?: Record<string, any>): void {
    this.log('DEBUG', message, meta);
  }

  public info(message: string, meta?: Record<string, any>): void {
    this.log('INFO', message, meta);
  }

  public warn(message: string, meta?: Record<string, any>): void {
    this.log('WARNING', message, meta);
  }

  public error(message: string, meta?: Record<string, any>): void {
    this.log('ERROR', message, meta);
  }
}