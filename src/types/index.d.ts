export {};

declare global {
  interface Window {
    ymaps: any;
    gtag: (...args: any[]) => void;
  }
}
