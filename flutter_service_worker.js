'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9421ca70c341ad6f196770bf48e9d320",
"assets/AssetManifest.bin.json": "7fccd0156acda407169e1648760b7967",
"assets/AssetManifest.json": "edf62afe64078498f21c13f141eca4ba",
"assets/assets/fonts/NunitoSans-Bold.ttf": "51066f4d1d33630cd761e8cd0168d7b0",
"assets/assets/fonts/NunitoSans-ExtraBold.ttf": "e6a9e16cac802736f3c92c47d94a52de",
"assets/assets/fonts/NunitoSans-ExtraLight.ttf": "bc36a8726e20804a94da3a12bd6eda84",
"assets/assets/fonts/NunitoSans-Light.ttf": "3a318cfcc78904616af13303520a69a1",
"assets/assets/fonts/NunitoSans-Regular.ttf": "fb98ed1700e8dfaf0764c11fc36a0a05",
"assets/assets/fonts/NunitoSans-SemiBold.ttf": "9c443ad7c0f391c4854a6b7c0f52788b",
"assets/assets/icon/closed_dialog.svg": "e5eb2391d5471484472a5755c2a1ccc9",
"assets/assets/icon/ic_booking_drawer.svg": "cbdb60dbb939d04eb5c7edae4b2204fc",
"assets/assets/icon/ic_call.svg": "b6ab2971942a4aa20998cb2c3a5e7bb3",
"assets/assets/icon/ic_category.svg": "3af435fee6dfede628c2b4a5577b54c9",
"assets/assets/icon/ic_contact_us_drawer.svg": "3b42a2a9f06706d12efd312d98bafe0f",
"assets/assets/icon/ic_dashboard_drawer.svg": "522e385931a94ed8bdbfa33a84217acb",
"assets/assets/icon/ic_delete.svg": "cfc5815916dc6030a2c3a1079e69ece4",
"assets/assets/icon/ic_edit.svg": "7e27cd4da2117349b588aaa15bf155df",
"assets/assets/icon/ic_eye.svg": "96eb69ab7a370ba0f50ccb6a3b6e7442",
"assets/assets/icon/ic_eye_slash.svg": "6956c2515ef064ca0e18b42cf5b3f5bb",
"assets/assets/icon/ic_filter.svg": "2a5854f6f35887f027872ed7e5d09615",
"assets/assets/icon/ic_location.svg": "c8618e995e8c302bde19df520910993e",
"assets/assets/icon/ic_logout_drawer.svg": "afd67fde0b1f1d1346fce8ef985efdec",
"assets/assets/icon/ic_message_drawer.svg": "1acbfd4343d1a791daaae57e849db1a9",
"assets/assets/icon/ic_notification.svg": "4df20dd1186f05a013e43a5edbe6a981",
"assets/assets/icon/ic_notification_drawer.svg": "c771305b1e39283a8d4650d4172ddee6",
"assets/assets/icon/ic_payment_drawer.svg": "e5c35dba2fccbe861e4b1a945bd15c6f",
"assets/assets/icon/ic_payment_history_drawer.svg": "c8fabfe63172ed6b185bf67180756640",
"assets/assets/icon/ic_promotional_banner_drawer.svg": "d50a17fa92a392ebdc081184f8f57c6a",
"assets/assets/icon/ic_search.svg": "9af109eb81b18bf9ad7ae4d54fe4f040",
"assets/assets/icon/ic_services_drawer.svg": "31634de1f053c343930297a4a973e673",
"assets/assets/icon/ic_services_location_drawer.svg": "a7361431ee0f7651e64c1d7af30a4df6",
"assets/assets/icon/ic_services_provider_drawer.svg": "fc48dc68371cbbbf6a96973afe0b7dbd",
"assets/assets/icon/ic_settings_drawer.svg": "661f95453cc5fcf38a865c44fb1270bf",
"assets/assets/icon/settings.svg": "661f95453cc5fcf38a865c44fb1270bf",
"assets/assets/svg/action_eye.svg": "190b0c68374a2f7ce64ba369e59d2151",
"assets/assets/svg/app_bg.svg": "8a7d20b90509582afd0b9cc5f2e0437d",
"assets/assets/svg/app_logo.svg": "d9c2ad5c10333c4fb9ddfa338a323931",
"assets/assets/svg/chat.svg": "4b44a198ea1fed7c812d118bb0a0af32",
"assets/assets/svg/home_banner1.svg": "62ae7c3ea8b99054b5345f7cf383b031",
"assets/assets/svg/home_banner2.svg": "3f30f5c5cee38b16bd67f1718ecc376a",
"assets/assets/svg/home_banner3.svg": "783359038fe65a2b1da66df0a9b4ad43",
"assets/assets/svg/home_category1.svg": "e96a2f40a23ec82a4e4d849d63e994dc",
"assets/assets/svg/home_category2.svg": "982c697712ec897c28a9de2c805872f5",
"assets/assets/svg/home_category3.svg": "4bf7c101ad7c17ecd1791594f0ac481d",
"assets/assets/svg/home_category4.svg": "cd2cb797fb0a8c47470f94b63a87a05c",
"assets/assets/svg/home_category5.svg": "de433a6c0767474c9cd826ec743481c0",
"assets/assets/svg/home_category6.svg": "1d26c3dccce78272c27e91769a81bee8",
"assets/assets/svg/home_category7.svg": "c988f3020b93b37fdb95a1e310ca7172",
"assets/assets/svg/home_category8.svg": "3ac5d3937e1e2c8b92533df5e1badd9e",
"assets/assets/svg/icon_half_circle.svg": "bb38256b18128974684b559628303f58",
"assets/assets/svg/small_app_logo.svg": "1343bb86988040f9bc81950773764bfd",
"assets/assets/svg/total_booking.svg": "391a794887cf302b47b480fe07b52606",
"assets/assets/svg/total_provider.svg": "893ec9c226f4a69bb01a5e9ef8cfb6e2",
"assets/assets/svg/total_revenue.svg": "45025e2b1bae3d0370b871f883869232",
"assets/assets/svg/total_services.svg": "3cb369dd0ab9866cfaa8bad06a9714a6",
"assets/assets/svg/upload.svg": "7f444d30c5ef7c6e575d7a30977436d2",
"assets/FontManifest.json": "c3d5606c281fd72523c2adba7e6c5a48",
"assets/fonts/MaterialIcons-Regular.otf": "50c1b80acb12d811a43c73b258aa6986",
"assets/NOTICES": "0da21f81c9f6a1a77109fd9e26c711de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "21bddfbbf68b8fe3530970625eb73eba",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "cc8d3cdd186ac22d0b10658210db2ccb",
"icons/Icon-512.png": "faee57212a06ec238d0d21beeb504da2",
"icons/Icon-maskable-192.png": "cc8d3cdd186ac22d0b10658210db2ccb",
"icons/Icon-maskable-512.png": "faee57212a06ec238d0d21beeb504da2",
"index.html": "2e51ad3dc1f5b41d912eae0520fd5e50",
"/": "2e51ad3dc1f5b41d912eae0520fd5e50",
"main.dart.js": "5ca8d3aaaa49cd7f78d2710227eaa0cc",
"manifest.json": "247aec96ad4ffa5647b5e954e164f247",
"version.json": "cb648f3438e620a93558e1cee82a83cd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
