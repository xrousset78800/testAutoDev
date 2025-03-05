
class ProxyService {
  constructor() {}

  async getProxyUrl(url, origin) {
    if (origin.includes('localhost')) {
      return 'http://localhost:8080/proxy'; // Replace with your local proxy URL
    } else {
      return url; // Use the original URL for non-local origins
    }
  }

  async request(url, options = {}) {
    const proxyUrl = await this.getProxyUrl(url, new URL(url).origin);
    
    if (proxyUrl === url) {
      // Make a direct request to the origin server
      return fetch(proxyUrl, { ...options });
    } else {
      // Use the proxy for CORS requests
      return fetch(proxyUrl, { 
        method: options.method,
        headers: { 'X-Proxy-Origin': new URL(url).origin },
        body: options.body ? JSON.stringify(options.body) : undefined,
      })
      .then((response) => response.json());
    }
  }
}

// Initialize the ProxyService instance
window.ProxyService = new ProxyService();
