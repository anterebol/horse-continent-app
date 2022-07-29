/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    ymaps: any;
    gtag: (...args: any[]) => void;
  }
}
