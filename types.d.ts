declare type Context = import("./server/types.ts").Context;
declare type Middleware = import("./server/types.ts").Middleware;

declare interface ImportMeta {
  /** Aleph.js HMR `hot` API. */
  readonly hot?: {
    readonly data: Record<string, unknown>;
    accept<T = Record<string, unknown>>(callback?: (module: T) => void): void;
    decline(): void;
    dispose: (callback: (data: Record<string, unknown>) => void) => void;
    invalidate(): void;
    watchFile(filename: string, callback: () => void): () => void;
  };
}
