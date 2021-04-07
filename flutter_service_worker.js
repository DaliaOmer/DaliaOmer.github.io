'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4b06fba33544bb69a1658e18a6f00af4",
"index.html": "634e10468ea142ba798426413c0e2a99",
"/": "634e10468ea142ba798426413c0e2a99",
"main.dart.js": "70b43dbf4b64e7411210c63778e70c95",
"index.html.orig": "b50375dc6adaebfef4b53716a39f3652",
"README.md": "2009a70a9ed939ece9684c987505e7eb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "37789f08f443d7ddf5e75293c7fd710e",
".git/ORIG_HEAD": "95d19d695132381790aae2f4f3141fa1",
".git/config": "b229e16373726ae3d9f7bff7fa45c6e4",
".git/objects/61/a009975991c5a8c92abe95468ec700150be42b": "6eecfc5c8cd9930d0952848df3f39d2c",
".git/objects/0d/d273d2018937476e9ba8a76860b6ef6bc3eba0": "2df5d92be40932f6f93fe9e79fbf240e",
".git/objects/0c/313e20ab7fdd0fe4188c9c8ec47c18e06750ac": "102e130ba942d2a1243e3886d5c4ea54",
".git/objects/50/7777ff0697edb50376ff797acecb9b247e66fc": "dd8497bcaf1cdf40125afd5de361046e",
".git/objects/3b/df042496ffeb58a4ca176d04df225e048a2bfa": "bfa3866542bbdc847e655b75e59a00bf",
".git/objects/6f/39f329be0b05a89c6ae53a8aacb3a0a688f10f": "5e934b28d380794b0f26d07d46a0fe56",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/80f322c32f338d36255035752beeed5c084aa8": "4dae0faf0ab4fc729964d4fbed29551f",
".git/objects/9e/b370a910ac4565cc25bf776fd83881cc17279d": "ad1c70db2f45e8421f9c92303a25e784",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/3e3089cd4e35367971c690a13ca73562ab0a66": "bd71424a387d13997f92c8f083adf54c",
".git/objects/69/b92e1fffb864ebc583c427595277526bcebd93": "f59a45a1408b14dbd8067c46151c7cae",
".git/objects/69/dccecc3a2c6719a0812eab8e61dfa7eb319cd0": "09515b917eae06e2848deaf39682387e",
".git/objects/58/8435d23e57d68a1dabd11f306f0b2819c5f104": "23134a80afdcbe8a3ccfe68cd2a41a38",
".git/objects/58/3a5d71b23dad575ef62352a6490bcda16c58aa": "b106ffd5015ec14f7fc75110be59a612",
".git/objects/58/5bf0905a407f2a96822ca440aa54dfc93c8fd5": "7b8125013f8c54d47985724776e66070",
".git/objects/5f/f54074e58964d3f9a8134eac6151dc2520c37b": "444b43fc77afcc70c3e2711ecbff68dd",
".git/objects/33/0a820128e1343c4c5828a1ccb8ab60f8010093": "f1ee9810c3b6a20af5234e488cb8cb8b",
".git/objects/05/c56b7a97ef19093dee91de3798b72d53f4de2c": "e2ce1d7e924750280621a8718febfd51",
".git/objects/b2/94d4dcf393b5e2d8ae551f2070e0a94fb51999": "8e88d1823b90e55b945f8899b827add1",
".git/objects/d9/a611eaf0d9eaf18fd2c3c9d6417272f6a771cc": "4f4edec4b10d92d82a6a25cc20003b7b",
".git/objects/be/f51e15c308f20b3897de0d8799b0a9a7c97de6": "371d6a081bb5e40abd5a6743ca980540",
".git/objects/df/a12b129f1be70541075c66e2e1d4a56c171921": "8338fbb972074cf9c14c0e2f6717c9ca",
".git/objects/a2/6588a6c3564ca29cf286419d7b0d6fe3c94d13": "fe7cb93f4ce1fb4d37a59424a37212c7",
".git/objects/bc/c7725276cfb1b77820b8bacd2ac22c3c7e8a30": "1b7e206981a641ae58ac6229ec0baec6",
".git/objects/d8/6ea1cb1957939defa99e1fe52b8471d1906795": "0942819e3614dc63ab9ddbef7272c1ae",
".git/objects/f4/4d175961b1a1f16a0961c3185ff9834e211db6": "ff2a05575a931608be90e5d29457b2c2",
".git/objects/ee/717be0dd494abf0ccfb87310870dddb37554e4": "0b80b8738135ef89555cdbcb1db17d51",
".git/objects/fc/d80878597a934e3ed23cebd3fd0c9c6dc3b47e": "587becbf4c4b0e30a0d4a1edbb1274b0",
".git/objects/f2/b2a01e5989559acfffecb2dab30c317022df32": "d83d8dc33646e1f4a37ed8ee2fa5e070",
".git/objects/f2/2e43e401d1aab235c6920fab0b176d8cf96bd4": "0cd20edb648d68e3b0967401ec7aa224",
".git/objects/ed/285b72d8867581ec24af6ec01fd772cf3fc6d6": "9931c2cbfa41d56daaec3ba587c9979a",
".git/objects/ec/3a1bb0d5419bba66026432c9ed4973ab1e9961": "f6478685c2098a370133c0b563e03436",
".git/objects/ec/6b6ac931506d48d4fcfd4cdfa8f0915eba06bd": "79f09a8af7c4892472f3e38ac60c1656",
".git/objects/20/63781a9a4e06c5232795756aa7552cfe7968de": "1b6ad8f17bf44fe6091f015faea8bc12",
".git/objects/27/dc52ca74df37a3a5797517edb7daf4f18dacc8": "8d73f11022c69514322099181f6251b5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/640bbb5dc4760fe8d8be828105a7920065f1be": "e658c31fb031c0dbbce1a524bcd9407a",
".git/objects/16/13bc91f3dc7421d3dce9d7e3a9c1e563c4bfd0": "2bfbab61ff49e50731c56df705fdc86a",
".git/objects/89/0c7bc78c6a474abb85562b28e22481372f99b2": "36d890b787e33346d22ed53c08b2bfc0",
".git/objects/17/a7fd1be3d35c98e4a80cb0ddf79a284ea5ae32": "204cbc7323c16d94b23184a359db8a7e",
".git/objects/17/79a96929c89694d5c4a734fdb5e1f18ad0c62c": "ea4cb26a01a873be54d317bfb19c0e9b",
".git/objects/8a/758bfab16e0102e5af11bbfc8a800c4a36b35d": "6e39855ae097d8956fdc2c61bed463c4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1fee0e3e1115fff520e46121e20699d805d5bf": "8f8e6f538595fc761f5ad05a313e5421",
".git/objects/2f/1848617d057f88ddb6d4a3e021a1b374048fc3": "2054ad257de3e0828579e365faf586c2",
".git/objects/43/88a2b14dfd213f1b621b5548975352e251fcee": "5e7f0f5daa1756937f1d5b92a1754d38",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/489ff7646013570767760fbef019a8c6f254bb": "07458f81248aa3d0ffa7c80c742befae",
".git/objects/07/fc511599bab8557c547d2ac31439d3cf1f0e4d": "ab19996f1de2d8c2370ad82b6d80aa07",
".git/objects/9a/01a9b0b5effe05816fbe914101ad086bf5cbb6": "e8d1de41679b0f566bf4d6f4c13f1f06",
".git/objects/36/31fc2999c6de42364b5550b2b96b99bfee3505": "52ee37f0a9626676f2043576a046cf82",
".git/objects/5c/901fed062cf2b4b929516fe0caf6dd7d0f37a2": "6237372bcc07c7d4f37dd97ed0c750c3",
".git/objects/31/920ca6ac88cc402f07a23f4798aea1f17def75": "b044bf97a20e9814da9ad0979bf0e78f",
".git/objects/31/f9115d3e6ac1cbd2fa10ee0672c6dc2726028e": "767868bf8e02bcebb69f4fa51c71d86f",
".git/objects/65/6e8027b39c7019b78a1054f29c1cf398559f2a": "2071162190e937aea472eba9a3c43b28",
".git/objects/65/575ecdf3c93e87b07da119a3cb61a45dc8edac": "f999791fb10ba0bf7c7490b38d1f67e2",
".git/objects/3a/df96466d1ce988d58fa7c32ada5536e235d8b0": "cc92a2788dea4c524f618348869afb84",
".git/objects/98/9a1cafbf42171527b1bb267ff7d9df4fd0138e": "eec9427319aa7e50ea3b91785dfd8156",
".git/objects/3f/47866d1148b95e1cfde9c925a5846597b6146b": "4ef6465f2f6b8dc6d1675a86318a99d9",
".git/objects/5e/0069410fcdc445815e8a8cad555572dd22754a": "6aa78ae0abcf8842a06bf878bf5dc668",
".git/objects/37/5e142d75e1a7dc038ac397177952234b711544": "50befb83391883767b7e425a8daa5029",
".git/objects/06/3b3837461e3d8455021c5f282c14fee041aff2": "6e90bbc21b424addfa5266cffcb3c11f",
".git/objects/6c/a97172d75e5ec9968fc1d45a7c2e1df4fffbe5": "509265ccbc42bd14df6af673d4b7cff9",
".git/objects/0f/3fbc41fc2d7b50f03f4bdcd9d8a056f1def513": "94facecfc11f737be145c18c1d4fd505",
".git/objects/0a/c27392e67dd3eafe843cb3f6bca6759b2e6452": "75b58dfe575c42b800d18994408b7c20",
".git/objects/90/11635bdfd9b7e5f7933e64ece62befadeb486f": "bc0701868954d480499b21db67aeaa2c",
".git/objects/bf/443445695e01d8517ac61068e338fc2c73953e": "804b5d04190c4009e798a3c997811aa1",
".git/objects/bf/4bfd070c5ba1fed7400f2e9d840848c5e74d10": "126ee1b9f789340364b2c3738969b67c",
".git/objects/bf/915a7527a7b66565a764d2ed63f11c6defeffe": "da0d2c514483230afa8936da84035bc6",
".git/objects/a0/50a9574baae43f304ebf3032790728d7be1ffc": "a7c76fe8013519dca3eaacea055a1eb9",
".git/objects/dc/352eb15f1f57fb95c782065ee7655a9dad6458": "f8efed154c6c799baeaa8d0c095cd0b2",
".git/objects/a9/fcf590f417cfdf3808bf634d40a76885012106": "85d4139ca95e742bc7772fdc757ae472",
".git/objects/a9/b3a3d23de4e3379b00bf1169f18d092993c19e": "dc132c314ce2877c24a334c985caf9ca",
".git/objects/af/344d721fc50308747e2e21a5b31db90ed2ea50": "44a0b1a70b646bf0ff8c545045367399",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c96ddf467fee83ce54ef68bd56007fa14b2711": "d7f85d59a59f6027842c685a5785b0f7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/e9715e51dc2c67296f585b2df9b2cd244b8c6b": "cb0e0fbac8417900a953cdd72314580c",
".git/objects/c4/4edd5dca18b569d5cc052fe454372cd20def37": "f94987a9a99fa43396c18367781426bf",
".git/objects/ea/085efafc51bc4bd6fe5501af0452b979057e98": "1669f0f62f8e1a7eb98c15c6b52a0500",
".git/objects/cd/aa7c44d780b46178c454df42263ca81f142cf9": "53a20df372033f47f49de003c79cdccb",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/92e530df02fb18b39fd505e7ab1218a7879893": "991ef84a379332b9df4e13d424a1cffb",
".git/objects/f7/187752a175bc8908f8f3d0e918bca6c30d13b1": "3caf61bcd9a6a24c094c7487e31e5fd7",
".git/objects/c2/6ba964f9038d53736e423975adba4c8bc39ba9": "1c128ca32d66c4f322278a94ba182040",
".git/objects/f6/70ac1eee02bc988f72a3f49ee0777993eab130": "92af834231dbf30bf6eb1474b8fc8bdc",
".git/objects/e9/3185c2fe72bffedb1d9ebd579984a764153908": "d0498f267981dfdc09f6266935f9dcb2",
".git/objects/e9/7b5846a7401381ba17d5ff91a583c368351799": "fef8527ef1e8d2a24ee20fd32f114f71",
".git/objects/f8/525cc878ce7ad3b11d97279278f441d8faa689": "522e12671395effda454aedffd17eac9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/a69deda4cd03a5ad8ff52df4f82d474f7112bc": "5b75f63227770e43e7ef2b6b65702315",
".git/objects/2c/496c5db0d048b2f195631cfd7e436d76dc6bf1": "cec08bb137544ab8277e461fd5c39ea5",
".git/objects/79/295837245b46300c99ccc59146c6693e859780": "bbaef6fd655a17aec96be84600a0d752",
".git/objects/79/b44cf7be6dea22785397509f4a9aa93bf0d2a1": "e0eba2c05acaa055f3079bea7c7e0d7c",
".git/objects/41/36136ebf174026d2321587d1a3f133931965b8": "c60c075cdec94aa7cd231317571efdca",
".git/objects/48/54d7c68104385ec1927fc15b37c044aa214295": "da6062c81778f332447bd8089e26c0e6",
".git/objects/70/82e60f4b07054459e3412439a04c0255d2b9e0": "d23679d669033c8f4981d4e8a4e5b8fa",
".git/objects/4a/ae6462634a70156554fbb1b3ba0ff89c5df715": "a0ef8ddfc1e24180326f922ae021f8d4",
".git/objects/24/79e2b1b884c569ab606e3527a5e28c0c8b7f0c": "1be5d57ad10c28413341b95151467a5c",
".git/objects/4f/1bdb1939e7f04cbfa5b636e6bbe1495297cb84": "3142b0b90198904ded717b9a5ca576fb",
".git/objects/8d/964b57c89dd0127610f190142fddeebd226afb": "3bbe3bd82a65bf713bfeffca4d435b25",
".git/objects/12/4d472e9ccb94af304cf1d904d3f30d91e6d18f": "ef3e990a4cca9ca4aa9548e7728cc8ef",
".git/objects/8c/e81b4cfcdf78818776e5ec6ab71509ba5d39ed": "e877b61d12f65bd94e7b0427954cd87d",
".git/objects/8c/f61334afb95ba979dbe97cf8d46984c7ab544a": "e646704fcb50b20db41a5030ebba5c6c",
".git/objects/8c/0e136350cd12920ffebb194bedaf06a477f30e": "2a83bc13b748e5cf52b0d969d635349b",
".git/objects/85/25d8ce0aeb6e810c4e1f8b203bd9987303c304": "e7f7b23f7c40919bb77987b5f2d771e3",
".git/objects/1d/21cd994f2d2eb121967f1886fa065482e0ba9f": "094134930c2f7693992156f1080aea64",
".git/objects/71/24aa2ac920d8e73bffb34e3f97e87d72fc9527": "e56a3430cd2e323964c8f5af026bdb26",
".git/objects/76/3b61dcf5a01041e101aa3cf84a4df6fe069d24": "d80a336050e563737ad4e07905a92250",
".git/objects/8b/c4394a4e91102048c115d8828fc37a532622c9": "9dfd742c84310362c1493ed658b3ff70",
".git/objects/13/028b6dd298f7b97335f11ef4556462068d2264": "ba19e51b92b0cf0e1e21237160c4f9fb",
".git/objects/7a/2dde0e05f77435674cefd4947d3974fcc85827": "92e7f0f4caf617fc8e770a8860e59b8a",
".git/objects/14/8a9e4d20e91db349d981c1057ad5a0943b7ddc": "be0ee63f5c34bb754211f2c33f6508a8",
".git/objects/22/9dae9c6dd6fb75ec51d5f9b0903d28d96f7390": "006b6bc3e79bd936180d55c6e226ff92",
".git/objects/22/d4daa7c5e878addc3bc555e4845e44b85b153e": "722b12df1f786b1f50e6c5f8146ed17a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19b3430442ea4e9dc163a5e664094eae",
".git/logs/refs/heads/master": "19b3430442ea4e9dc163a5e664094eae",
".git/logs/refs/remotes/origin/master": "858d8689f66135d76054724614f5ec0d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "be378c66e24fa28fd05c0ba204b85898",
".git/refs/remotes/origin/master": "be378c66e24fa28fd05c0ba204b85898",
".git/index": "94a0de1b84d447c8bede80e47a10b613",
".git/COMMIT_EDITMSG": "b943eae4b0a94a7570a8c6e7d173093d",
".git/FETCH_HEAD": "22745ea1374eea54bcdd64c5962925a7",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "6cc74ea5ad0d649d316307d34642bc93",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
