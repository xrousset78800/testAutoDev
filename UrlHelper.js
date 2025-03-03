class UrlHelper {
  constructor() {}

  getBaseUrl(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return `${parser.protocol}://${parser.host}`;
  }

  getPathFromUrl(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return parser.pathname;
  }

  getUrlParam(name, url) {
    const params = new URLSearchParams(url);
    return params.get(name);
  }
}

export default UrlHelper;