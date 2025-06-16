import { AxiosError } from "axios";
import { ExceptionAlert } from "./ExceptionAlert";

export abstract class Exception extends AxiosError {
  abstract code: string;

  constructor(
    readonly message: string,
    private readonly _cause?: Error,
    private readonly _metadata?: unknown
  ) {
    super(message);
  }

  log() {
    return {
      message: this.message,
      code: this.code,
      stack: this.stack,
      cause: JSON.stringify(this._cause),
      metadata: this._metadata,
      status: this.status,
    };
  }

  alert() {
    return ExceptionAlert(this.message, "info");
  }
}
