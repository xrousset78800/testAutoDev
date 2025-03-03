// UrlHelper.js

class UrlHelper {
  constructor() {}

  getMediaUrl(mediaId) {
    return `/media/${mediaId}`;
  }

  getProxyUrl(proxyHost, mediaUrl) {
    return `${proxyHost}/${mediaUrl}`;
  }

  getCorsProxyUrl(corsProxyHost, mediaUrl) {
    return `${corsProxyHost}/ cors-proxy?url=${mediaUrl}`;
  }
}

export default UrlHelper;