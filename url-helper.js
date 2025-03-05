
class UrlHelper {
  constructor() {}

  getAbsoluteUrl(url) {
    return new URL(url, window.location.href).href;
  }

  getUrlParameter(name) {
    const url = this.getAbsoluteUrl(window.location.href);
    const params = new URLSearchParams(new URI.parse(url).query);

    if (!params.has(name)) {
      return null;
    }

    return params.get(name);
  }
}

// Initialize the UrlHelper instance
window.UrlHelper = new UrlHelper();
