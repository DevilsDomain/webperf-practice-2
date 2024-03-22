// Listen for the 'install' event, which is triggered when the Service Worker is first registered.
self.addEventListener('install', event => {
    // Perform any tasks required during installation, such as caching static assets.
    console.log('Service Worker installed');
  });
  
  // Listen for the 'activate' event, which is triggered when the Service Worker becomes active.
  self.addEventListener('activate', event => {
    // Perform any tasks required during activation, such as cleaning up old caches.
    console.log('Service Worker activated');
  });
  
  // Listen for the 'fetch' event, which is triggered whenever a resource is fetched by the browser.
  self.addEventListener('fetch', event => {
    // Respond to fetch requests, such as serving cached assets or fetching resources from the network.
    console.log('Fetching:', event.request.url);
  });
  