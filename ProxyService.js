// ProxyService.js

import { Logger } from '../services/Logger';
import { UrlHelper } from '../services/UrlHelper';

class ProxyService {
  constructor() {
    this.logger = new Logger('ProxyService');
    this.urlHelper = new UrlHelper();
  }

  isCORSAllowed(url) {
    // Check if the URL is allowed for CORS
    return true; // TO DO: implement actual CORS check logic
  }

  getProxyUrl(url, proxyStrategy) {
    let(proxyUrl);
    switch (proxyStrategy) {
      case 'local':
        proxyUrl = this.urlHelper.getLocalProxyUrl();
        break;
      case 'cors':
        if (!this.isCORSAllowed(url)) {
          throw new Error('CORS not allowed');
        }
        proxyUrl = url; // No need for a proxy, CORS is handled
        break;
      default:
        throw new Error(`Unsupported proxy strategy: ${proxyStrategy}`);
    }
    return proxyUrl;
  }

  resolveProxyUrl(url) {
    const [protocol, host, path] = this.urlHelper.parseUrl(url);
    if (host.includes('localhost') || host === '127.0.0.1') {
      // Localhost or local IP address - no need for a proxy
      return url;
    }
    return this.getProxyUrl(url, 'cors');
  }

  async fetch(url) {
    const proxyUrl = this.resolveProxyUrl(url);
    try {
      const response = await fetch(proxyUrl);
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      this.logger.error(error.message);
      // TO DO: implement retry logic or fallback strategy
    }
  }

  async request(url, method = 'GET', data = null) {
    const response = await this.fetch(url, { method, data });
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    return response;
  }
}

export default ProxyService;