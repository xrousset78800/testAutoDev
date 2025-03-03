// ProxyService.js

class ProxyService {
  constructor() {}

  async getMedia(url) {
    try {
      const response = await fetch(url);
      return response.blob();
    } catch (error) {
      console.error('Error fetching media:', error);
      // Fallback to VLC or other players if necessary
      throw new Error(`Failed to load media: ${url}`);
    }
  }

  async setProxy(url, proxyUrl) {
    try {
      const response = await fetch(proxyUrl + '/' + url);
      return response.blob();
    } catch (error) {
      console.error('Error setting proxy:', error);
      // Fallback to VLC or other players if necessary
      throw new Error(`Failed to load media: ${url}`);
    }
  }

  async setCorsProxy(url, corsProxyUrl) {
    try {
      const response = await fetch(corsProxyUrl + '/' + url);
      return response.blob();
    } catch (error) {
      console.error('Error setting CORS proxy:', error);
      // Fallback to VLC or other players if necessary
      throw new Error(`Failed to load media: ${url}`);
    }
  }
}

export default ProxyService;