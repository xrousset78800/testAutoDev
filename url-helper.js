class UrlHelper {
  constructor() {}

  getAbsoluteUrl(url) {
    if (url.startsWith('./')) {
      url = window.location.href.split('/').slice(0, -1).join('/') + '/' + url.substring(2);
    }
    return new URL(url, window.location.href).href;
  }

  getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);

    if (!params.has(name)) {
      return null;
    }

    return params.get(name);
  }
}

// Initialize the UrlHelper instance
window.UrlHelper = new UrlHelper();
