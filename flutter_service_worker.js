'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6c3db72eba39ca9b9273feb2f8a5ef72",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/logo.png": "99d5f157c1281deae6519eb06dbcbabe",
"assets/assets/images/splash.png": "27df280f15c4f9409a220cb663644a13",
"assets/FontManifest.json": "be8b34aacf7d249f9ee9ced32425f343",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "47e6a01e58d21d3059f54491854372ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/apple-touch-icon.png": "c8722fb470a194fd892e7ca76e8d7248",
"icons/favicon.ico": "5122351650ae623a757289c48338a8f4",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "72e194e53d15be22a76847d9ba54f303",
"/": "72e194e53d15be22a76847d9ba54f303",
"main.dart.js": "ae5a2f7f77374c1e2aac9335bdc195e2",
"manifest.json": "9b0b7b2968619befd3639dcdb78c2962",
"splash/img/dark-1x.png": "9c2632b39d93070f5a2534809779ff23",
"splash/img/dark-2x.png": "48688914cba3a59a57d5c97d63b6dcfd",
"splash/img/dark-3x.png": "6d5578d2dc74be5d1a24d031c81f4740",
"splash/img/dark-4x.png": "2f59f406640c71d0ac77a936511b6168",
"splash/img/light-1x.png": "9c2632b39d93070f5a2534809779ff23",
"splash/img/light-2x.png": "48688914cba3a59a57d5c97d63b6dcfd",
"splash/img/light-3x.png": "6d5578d2dc74be5d1a24d031c81f4740",
"splash/img/light-4x.png": "2f59f406640c71d0ac77a936511b6168",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "fd07e329d0addaee7af5d9dfe633aa54",
"version.json": "a3d4f30422a043882a9ab7b5cb06318c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
