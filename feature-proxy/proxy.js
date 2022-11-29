const port = 3000;

const { createApp } = require('@unleash/proxy');

const app = createApp({
    unleashUrl: 'http://localhost:4242/api',
    unleashApiToken: 'default:development.87570791bcf1a0e8aab1a7b139deb4a29f3f74537eb70226ff86ee0a',
    clientKeys: ['react-proxy'],
    proxyPort: 3000,
});

app.listen(port, () =>
    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),
);