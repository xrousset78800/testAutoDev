// src/utils/UrlHelper.js

class UrlHelper {
  constructor() {}

  /**
   * Returns the base URL of a given URL.
   *
   * @param {string} url The URL to extract the base from.
   */
  getBaseUrl(url) {
    const parsedUrl = new URL(url);
    return `${parsedUrl.protocol}//${parsedUrl.host}`;
  }

  /**
   * Resolves an absolute or relative path against a given base URL.
   *
   * @param {string} url The URL to resolve the path from.
   * @param {string} path The path to resolve (absolute or relative).
   */
  resolvePath(url, path) {
    const baseUrl = this.getBaseUrl(url);
    if (!path.startsWith('/')) {
      // Path is relative
      return `${baseUrl}${path}`;
    }
    // Path is absolute
    return path;
  }

}

export default UrlHelper;

