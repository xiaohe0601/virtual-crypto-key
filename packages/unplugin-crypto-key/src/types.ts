export interface Options {
  /**
   * Generate TypeScript declaration for crypto keys
   *
   * Accept boolean or a path related to project root
   */
  dts?: boolean | string;
  /**
   * Crypto keys
   */
  keys?: Record<string, string>;
}