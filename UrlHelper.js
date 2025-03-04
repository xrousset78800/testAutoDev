class UrlHelper {
    constructor() {}

    getBaseUrl(url) {
        const parsedUrl = new URL(url, 'http://example.com');
        return parsedUrl.origin;
    }

    getFilePath(url) {
        const parsedUrl = new URL(url, 'http://example.com');
        return parsedUrl.pathname.replace(/^\//, '');
    }
}

export default UrlHelper;
