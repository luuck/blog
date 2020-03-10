/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3d126bdac66b1285c589756c72825749"
  },
  {
    "url": "assets/css/0.styles.8c46daec.css",
    "revision": "1a839e94f78484750db3b5faadb3e2ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7840874b.js",
    "revision": "25985270293dd57e5e560c7544461bf2"
  },
  {
    "url": "assets/js/100.121c62f5.js",
    "revision": "6967b4f519c3f8d51f34b52818690177"
  },
  {
    "url": "assets/js/101.1da0951f.js",
    "revision": "ac1d23d9e5b475f842742a86f787721f"
  },
  {
    "url": "assets/js/102.ce51633a.js",
    "revision": "5625e4a646a3ca34999909c46de4c013"
  },
  {
    "url": "assets/js/103.e5762195.js",
    "revision": "1e6b800f54ea83ba939955eab6194453"
  },
  {
    "url": "assets/js/104.09f32580.js",
    "revision": "a87f9759ce16d7939f17d171c142f282"
  },
  {
    "url": "assets/js/105.bb7a68e0.js",
    "revision": "f1f4bc1328ec6b11817bac4578b5a6c9"
  },
  {
    "url": "assets/js/106.def85912.js",
    "revision": "651fc9aebd59d53e29e93f788463fb24"
  },
  {
    "url": "assets/js/107.f1b569e7.js",
    "revision": "6472cb75b121b9cd848455b9d0f55f8a"
  },
  {
    "url": "assets/js/108.a30653cb.js",
    "revision": "339b9118ad193ab4ba7a8375cec15d7b"
  },
  {
    "url": "assets/js/109.1635af65.js",
    "revision": "ee007479e7816e5b90396d58add779b3"
  },
  {
    "url": "assets/js/11.ac257d6e.js",
    "revision": "4f45513070d7efdea4f8848dda22d0e9"
  },
  {
    "url": "assets/js/110.f985df39.js",
    "revision": "c16636ef193a60799ea1f0be2ea166ca"
  },
  {
    "url": "assets/js/111.b79c094f.js",
    "revision": "ef3df587ce4dbd3f0b430834add80e55"
  },
  {
    "url": "assets/js/112.c95d0a0c.js",
    "revision": "a4d5aa33250cc83feb911b8b46b9c40e"
  },
  {
    "url": "assets/js/113.857888ea.js",
    "revision": "94237c882ddcae36ecd9562dd36d3298"
  },
  {
    "url": "assets/js/114.eadfea49.js",
    "revision": "e59d99545814fd1b0bd63bbe1515548d"
  },
  {
    "url": "assets/js/115.a062b05c.js",
    "revision": "05fd6d6d101dd1a000bb9b4a5afcd1e7"
  },
  {
    "url": "assets/js/116.1dfdbc65.js",
    "revision": "a46eb1a38f995c4ea26e1e39d25bf48b"
  },
  {
    "url": "assets/js/117.dc761476.js",
    "revision": "dea5dc2ff0d232806310998412401cd9"
  },
  {
    "url": "assets/js/118.21dd15eb.js",
    "revision": "dbe58b3b3cb6cb64b3f71320195dcd3b"
  },
  {
    "url": "assets/js/119.22eb7031.js",
    "revision": "920879b5ab4e723fbb31222ad18311fe"
  },
  {
    "url": "assets/js/12.a6e07cb1.js",
    "revision": "4757000bf80676ece6be7e115418b888"
  },
  {
    "url": "assets/js/120.8b21b265.js",
    "revision": "8b87b4a65893977bfc2792fe46723437"
  },
  {
    "url": "assets/js/121.cfd680d6.js",
    "revision": "d458e76521027f478b3e1e5a1460f315"
  },
  {
    "url": "assets/js/122.3766e467.js",
    "revision": "0fdd90932e6faa53cc746d67a556fd6c"
  },
  {
    "url": "assets/js/123.82549f32.js",
    "revision": "fc933396027fe0fe1517ac88d300147f"
  },
  {
    "url": "assets/js/124.bb56d4d9.js",
    "revision": "4e7a8ca5033dbd9cbecb614da643d9e4"
  },
  {
    "url": "assets/js/125.231759ac.js",
    "revision": "ce6e6554c0ef382c621a604d04b9bad3"
  },
  {
    "url": "assets/js/126.277a4c97.js",
    "revision": "7aa6c692240cac6d81b55db65472b8b1"
  },
  {
    "url": "assets/js/127.1408c292.js",
    "revision": "58ed5750a96a0d26a045235984afe10b"
  },
  {
    "url": "assets/js/128.3462c6f7.js",
    "revision": "444c85a81daad5fad8ea1a8de3df54de"
  },
  {
    "url": "assets/js/129.847591e6.js",
    "revision": "bd42e02cb4f27585549cf5615e2ab3db"
  },
  {
    "url": "assets/js/13.a8c6b11b.js",
    "revision": "5fb5f113d3d695eb2fd5d7d4629bb40a"
  },
  {
    "url": "assets/js/130.74689f33.js",
    "revision": "0e576777051c9a532b7c3876e04b99c9"
  },
  {
    "url": "assets/js/131.7deb2d07.js",
    "revision": "252a23dfee37e98e9ac8886a7fcc6454"
  },
  {
    "url": "assets/js/132.963e5a92.js",
    "revision": "7faa04a474a0cb561a596b15d8851bcf"
  },
  {
    "url": "assets/js/133.ee33c01e.js",
    "revision": "0774233c63f4dcacdc7b714ad100e61b"
  },
  {
    "url": "assets/js/134.5b9ea12b.js",
    "revision": "425fb7ace5fe951b06ab445cd92f5091"
  },
  {
    "url": "assets/js/135.521389b9.js",
    "revision": "b32eb3fa51b65de95e7874d8831042b2"
  },
  {
    "url": "assets/js/136.a5daf088.js",
    "revision": "8ed15d273e645a4e8878be3099f0f668"
  },
  {
    "url": "assets/js/137.14ce150b.js",
    "revision": "2a394a1de9ca6f4be27f7b8124b391fe"
  },
  {
    "url": "assets/js/138.55b9107b.js",
    "revision": "69e9a65b038d5b9afbf8b1f8a9568064"
  },
  {
    "url": "assets/js/139.5d1746c5.js",
    "revision": "ba5c4bab9ea1e439e289ddec6ea2b1f0"
  },
  {
    "url": "assets/js/14.bb39005e.js",
    "revision": "30235f4a073dcda87932cfcbba9e7575"
  },
  {
    "url": "assets/js/140.8742e3eb.js",
    "revision": "6d2d0921cbd92e460a8391387c546f2a"
  },
  {
    "url": "assets/js/141.5661ec9a.js",
    "revision": "704d965c99d3f639ceaa5018eb5a5939"
  },
  {
    "url": "assets/js/142.44871095.js",
    "revision": "70cafc00d431a19de99a3589812be147"
  },
  {
    "url": "assets/js/143.3ea75964.js",
    "revision": "77d30450e0924639b577caae4c73f6b6"
  },
  {
    "url": "assets/js/144.96969688.js",
    "revision": "025c54a910798e5dd7b615ba5ecbf57f"
  },
  {
    "url": "assets/js/145.0d23ebd5.js",
    "revision": "015e05e1cf69218be17c7db96f80cc8f"
  },
  {
    "url": "assets/js/146.9711c0e2.js",
    "revision": "cc6e691a08e129b6ef63a26edf5ef581"
  },
  {
    "url": "assets/js/147.1a11a99b.js",
    "revision": "6a8193ff6feaf59b2240359fadc76eb5"
  },
  {
    "url": "assets/js/148.15dd1885.js",
    "revision": "b72bbed27bb73e82560e451b000d39d6"
  },
  {
    "url": "assets/js/149.38af1de0.js",
    "revision": "eed42dc99234ba17abb1d1808f6a6761"
  },
  {
    "url": "assets/js/15.7113ef47.js",
    "revision": "47838ae8f4651d8f8db89223eaa82bc5"
  },
  {
    "url": "assets/js/150.80fe0c27.js",
    "revision": "bee7312a833575580692a844b40a9bf0"
  },
  {
    "url": "assets/js/151.7d84e079.js",
    "revision": "c463561c77615a5f32778e348d1b7360"
  },
  {
    "url": "assets/js/152.7e2eba95.js",
    "revision": "7c34e8dda8bf710943e104641e5c94c8"
  },
  {
    "url": "assets/js/153.b98584ac.js",
    "revision": "abb2a14e659e6b8817d17eaccef420d0"
  },
  {
    "url": "assets/js/154.a9964ef6.js",
    "revision": "e17490a965659a824b36db0cc05f9ba2"
  },
  {
    "url": "assets/js/155.1d049698.js",
    "revision": "275e51c8bec1d94d4f3e24d43196bc71"
  },
  {
    "url": "assets/js/156.3bd14e7b.js",
    "revision": "94c2e7b427602a488371aab77c60e465"
  },
  {
    "url": "assets/js/157.93bd8a8e.js",
    "revision": "3ff9520058f100c6e4f18dd8ae34ab8c"
  },
  {
    "url": "assets/js/158.eb78a787.js",
    "revision": "1b4acd49451e435f1ea4370358c8d3f4"
  },
  {
    "url": "assets/js/159.9d421dc2.js",
    "revision": "3b9d2230f5126f2d5e9b0e9ffdbd6cb4"
  },
  {
    "url": "assets/js/16.e856a463.js",
    "revision": "1fb51f9f2c9b4a046ec3a2377dee73bf"
  },
  {
    "url": "assets/js/160.1eda4d88.js",
    "revision": "df3c8330bee58f25157f613604361185"
  },
  {
    "url": "assets/js/161.8368b364.js",
    "revision": "70bf4abf71d1a702bc2ff0bf7d4f4dfd"
  },
  {
    "url": "assets/js/162.0ce0ed1a.js",
    "revision": "d25bef1a2e804fb8a9d7c4693c5a6936"
  },
  {
    "url": "assets/js/163.c87c5933.js",
    "revision": "72f51242ffe180146608c30dee383cc4"
  },
  {
    "url": "assets/js/164.6bd622cd.js",
    "revision": "5bc1303c08894e17a5a565986c8cafd5"
  },
  {
    "url": "assets/js/165.b857bbf6.js",
    "revision": "d278d535db11a1548235e29bfe3d3e13"
  },
  {
    "url": "assets/js/166.6c1a4f8e.js",
    "revision": "141210ede337c4feaf5aead03e5cd2f7"
  },
  {
    "url": "assets/js/167.3b31b961.js",
    "revision": "6c8feb14a0220ccb86f4cf014a47cc72"
  },
  {
    "url": "assets/js/168.fd5596bd.js",
    "revision": "af375d2575993d66ffa5a90c531e5665"
  },
  {
    "url": "assets/js/169.a9cde502.js",
    "revision": "16381f5f5c7c2ccf8fd8af1065023971"
  },
  {
    "url": "assets/js/17.8cc762de.js",
    "revision": "190d2f0f32619498f3c2c0c054d281a3"
  },
  {
    "url": "assets/js/170.161fae48.js",
    "revision": "85e3e5d4f018d408b5f0cf7e1a3b45e2"
  },
  {
    "url": "assets/js/171.2c89e0fd.js",
    "revision": "04c09712d06fe3ef85d3c6cba134d853"
  },
  {
    "url": "assets/js/172.d65587f3.js",
    "revision": "c42071cbaa1a467605352c695470fe94"
  },
  {
    "url": "assets/js/18.db842125.js",
    "revision": "6d83ce5fb03b81aa03d0e9649c6f73b5"
  },
  {
    "url": "assets/js/19.43a703c5.js",
    "revision": "5550640137fd8cfb655aca86c261417e"
  },
  {
    "url": "assets/js/2.e1e0c7d5.js",
    "revision": "0a0821711c19c3f33297f843b7d3a5a4"
  },
  {
    "url": "assets/js/20.e26506a4.js",
    "revision": "cafa7eafcd9e3c4356573f203b81492b"
  },
  {
    "url": "assets/js/21.8d68d911.js",
    "revision": "3a00dd5a2126aaecee35218a67a4b28d"
  },
  {
    "url": "assets/js/22.e05a1394.js",
    "revision": "2617e1c06c3b061420b107fb0371615a"
  },
  {
    "url": "assets/js/23.68e82a67.js",
    "revision": "6eaebac377f6b95cd754208d4d3b55a8"
  },
  {
    "url": "assets/js/24.41d656e2.js",
    "revision": "02f4a8da9bf7d7b6c7287396c006a0ee"
  },
  {
    "url": "assets/js/25.315f9fc2.js",
    "revision": "cd9c2d27f95e3b410bc6efe0ed20aec6"
  },
  {
    "url": "assets/js/26.4da73a77.js",
    "revision": "67f6d7c6adbadb16ec9a4570d0652451"
  },
  {
    "url": "assets/js/27.1ad7543a.js",
    "revision": "bd3249effec3d1a34d4577520d4c516d"
  },
  {
    "url": "assets/js/28.28dc36e8.js",
    "revision": "ba0165f1e4c3e8170a1dea6a7449f3c6"
  },
  {
    "url": "assets/js/29.d542a18d.js",
    "revision": "41d0858a525d16e72819892630650936"
  },
  {
    "url": "assets/js/3.facfa05b.js",
    "revision": "7f178ff83c54387e92a4b150217366e9"
  },
  {
    "url": "assets/js/30.5913ee80.js",
    "revision": "3af5d8ba12421c584ffb86a97ce4778e"
  },
  {
    "url": "assets/js/31.96c515bc.js",
    "revision": "ca296dac712a3ebf8d24ec0ead8bd90a"
  },
  {
    "url": "assets/js/32.832d2769.js",
    "revision": "fd8e5bd59a5e1511ca8ec4772423872f"
  },
  {
    "url": "assets/js/33.0b5f2b6c.js",
    "revision": "0b29f0701883789ce91766f72dfe8cbc"
  },
  {
    "url": "assets/js/34.f0a43b54.js",
    "revision": "10a764da0fe5b7a81eb85f217dc174c6"
  },
  {
    "url": "assets/js/35.393f5115.js",
    "revision": "38fd1f0d8a27ab9fa2ff4a39683fbaea"
  },
  {
    "url": "assets/js/36.6931f3d3.js",
    "revision": "58991f60ee4a5e7a152ad0ce2b074bbb"
  },
  {
    "url": "assets/js/37.3af59799.js",
    "revision": "8a180a8f07356f406026ef25f4c29be1"
  },
  {
    "url": "assets/js/38.5a1cf05f.js",
    "revision": "9684930f8390b0edcf3d2e69894a591c"
  },
  {
    "url": "assets/js/39.8c552f46.js",
    "revision": "55aad9f8f0cef4fbff1afdec49eedeb7"
  },
  {
    "url": "assets/js/4.2c2796bf.js",
    "revision": "a36fefe026dc7f65d42b067760d00e79"
  },
  {
    "url": "assets/js/40.cb569c3b.js",
    "revision": "599cd1de2838d82a8d577191f572a971"
  },
  {
    "url": "assets/js/41.6a2b99f8.js",
    "revision": "4c8b96a72b47c7875e30c30e8d008bf1"
  },
  {
    "url": "assets/js/42.687b56eb.js",
    "revision": "5bdb68e3d9c2043ee4b363317ea58760"
  },
  {
    "url": "assets/js/43.05284af3.js",
    "revision": "1547a125fcf55449f69463e039c2c304"
  },
  {
    "url": "assets/js/44.0b67307e.js",
    "revision": "c33a2664765ccfb743494c030a6dcff0"
  },
  {
    "url": "assets/js/45.7f6ef1f3.js",
    "revision": "74659d864543ea0ab8e0b70527a86fb1"
  },
  {
    "url": "assets/js/46.8249bf7e.js",
    "revision": "f1a51a0f0b35f279d8e21bae5cb3c3bf"
  },
  {
    "url": "assets/js/47.ec5f420e.js",
    "revision": "216c53e070e0b2853d7905c640dfc6ed"
  },
  {
    "url": "assets/js/48.d11a6c13.js",
    "revision": "438edf646305bb7680b3b2b1a8ba6df3"
  },
  {
    "url": "assets/js/49.e6449fe8.js",
    "revision": "5c163733e1a3f5a58c69e4e09e299ad0"
  },
  {
    "url": "assets/js/5.937ae87d.js",
    "revision": "2574ebcd0756ead4d864a97a7ead7328"
  },
  {
    "url": "assets/js/50.915ae3af.js",
    "revision": "3c7fab90f3eecae33f051a5be3d3c0f6"
  },
  {
    "url": "assets/js/51.f88017be.js",
    "revision": "85fddd30098cf76f5ff6092c51b7b8bb"
  },
  {
    "url": "assets/js/52.19883d30.js",
    "revision": "dc158f2c9d3ba961da54e3f57166e527"
  },
  {
    "url": "assets/js/53.fae82d2a.js",
    "revision": "74e644ba44a7eed03d1474341d27ca0c"
  },
  {
    "url": "assets/js/54.45609db2.js",
    "revision": "ceab0df9ef2bb237ff847c4adc1a3db3"
  },
  {
    "url": "assets/js/55.3ccab79d.js",
    "revision": "1aaad5e7cd3101a6bfbe73280c39b14a"
  },
  {
    "url": "assets/js/56.8768fe9f.js",
    "revision": "4b4f4868993a865a593b9a480a9ab79d"
  },
  {
    "url": "assets/js/57.6395cc92.js",
    "revision": "6765e4f94e121d91a9653d0b2f4a1eda"
  },
  {
    "url": "assets/js/58.c787abec.js",
    "revision": "ad1b84b12b170b366f920b2946af8086"
  },
  {
    "url": "assets/js/59.ee218327.js",
    "revision": "179a99d67a22adc95de7934e8332be1a"
  },
  {
    "url": "assets/js/6.c085291d.js",
    "revision": "8fd2f43355787c4cc592097ce6a361a7"
  },
  {
    "url": "assets/js/60.420a1524.js",
    "revision": "67f566d95897e82810d6fa59ab38eba5"
  },
  {
    "url": "assets/js/61.cb40927a.js",
    "revision": "b1a8001ed6ba712ed586c415ec77d2a7"
  },
  {
    "url": "assets/js/62.6f5dbe75.js",
    "revision": "18da2e07f4776b0645a9511600b950e6"
  },
  {
    "url": "assets/js/63.c719af9c.js",
    "revision": "1ccadfca741b8f375e4a49d455894cf3"
  },
  {
    "url": "assets/js/64.0c192abf.js",
    "revision": "7b69e17bcea36faea21908cf46d4f256"
  },
  {
    "url": "assets/js/65.2d535d20.js",
    "revision": "f99d303d3bf12c9d8423af81e966b2ec"
  },
  {
    "url": "assets/js/66.447f547c.js",
    "revision": "1f67e494547cf9384a3a17ae645192fd"
  },
  {
    "url": "assets/js/67.2f017eb6.js",
    "revision": "ff0cbf9294451dcf1d2b261864b8d0ad"
  },
  {
    "url": "assets/js/68.45248a24.js",
    "revision": "97156e5e9007719c8b0d00a6c30ef80b"
  },
  {
    "url": "assets/js/69.79eef53f.js",
    "revision": "c1dbfed64a2f626e455c2169de17c095"
  },
  {
    "url": "assets/js/7.33994ffb.js",
    "revision": "376b10dadbbe368ef8bc8be12cb9c49e"
  },
  {
    "url": "assets/js/70.45af4bf9.js",
    "revision": "0fb560215ad6718968459aed5f6c5dc6"
  },
  {
    "url": "assets/js/71.ecb70702.js",
    "revision": "78b4822cb0b5aa7541cb17eecec0c3a9"
  },
  {
    "url": "assets/js/72.77334722.js",
    "revision": "9b6585eb34c876e54cc41b30178a0a3d"
  },
  {
    "url": "assets/js/73.cf049b79.js",
    "revision": "b0522fdbf1a7ba14cde7f18ecb0c8338"
  },
  {
    "url": "assets/js/74.c7ae9ca7.js",
    "revision": "784057aa231b4a5b010d2ddf4ad47324"
  },
  {
    "url": "assets/js/75.e75e90c2.js",
    "revision": "e48004645048db01498e71f09cae1750"
  },
  {
    "url": "assets/js/76.8c15077e.js",
    "revision": "8e6461652264b4d91e868b54dcf70ac0"
  },
  {
    "url": "assets/js/77.b74dfd89.js",
    "revision": "970f1cabe93f55fd1097e8ff7b47eb3c"
  },
  {
    "url": "assets/js/78.9c53503e.js",
    "revision": "72e77ea32d8412668d7f709bf38f0036"
  },
  {
    "url": "assets/js/79.247800a6.js",
    "revision": "46160b453bcc460ef93be5e6e130bc98"
  },
  {
    "url": "assets/js/8.8e0ec08a.js",
    "revision": "53ad078feae05658d43760bfe730206c"
  },
  {
    "url": "assets/js/80.8eba10cc.js",
    "revision": "84e931de25a66a3caf1690f81a692024"
  },
  {
    "url": "assets/js/81.1ef35b21.js",
    "revision": "e568e25d88ce02290ba40fd035f2356b"
  },
  {
    "url": "assets/js/82.75aab693.js",
    "revision": "6e79e644d243da410f632646e950f138"
  },
  {
    "url": "assets/js/83.d7ab8425.js",
    "revision": "7bc79f255e711c56aa56ea5b07c5b3ac"
  },
  {
    "url": "assets/js/84.409b433f.js",
    "revision": "4836794351a47018d7fe7054c281c305"
  },
  {
    "url": "assets/js/85.2ca18b23.js",
    "revision": "73a368ef6b32f04eb7776bc53c02ca05"
  },
  {
    "url": "assets/js/86.f83bd3a3.js",
    "revision": "533e7c196b2a0c314db7c28dd896167c"
  },
  {
    "url": "assets/js/87.65ede75d.js",
    "revision": "bdd2f67f4bf261bc9429dacc7cfcdb4d"
  },
  {
    "url": "assets/js/88.60a2797b.js",
    "revision": "d6c8262ffca350c3a090be3568f6cbcf"
  },
  {
    "url": "assets/js/89.e1774334.js",
    "revision": "615dbd43644c7951522d7215fbce3377"
  },
  {
    "url": "assets/js/9.34339a8e.js",
    "revision": "3fa549d8ef9a3d70037344584b5e5da0"
  },
  {
    "url": "assets/js/90.920331ed.js",
    "revision": "05fd1c86d1006b5529f33043f166e99f"
  },
  {
    "url": "assets/js/91.17d76450.js",
    "revision": "8be3d7b9a643e96468f0b0a09ca2e3e9"
  },
  {
    "url": "assets/js/92.e013223a.js",
    "revision": "b4040b8595cb70bfc87d656af2f4e305"
  },
  {
    "url": "assets/js/93.03d110a3.js",
    "revision": "9b40b9fea799ca816971523c543398de"
  },
  {
    "url": "assets/js/94.5fe424b6.js",
    "revision": "bd6c3cdcbe09acde9804b9691a37092d"
  },
  {
    "url": "assets/js/95.5befa7a0.js",
    "revision": "42c0615ed91d300abb12357863c0ec03"
  },
  {
    "url": "assets/js/96.08a41e97.js",
    "revision": "7d0b056aac37fb40bbc61cf7981657b5"
  },
  {
    "url": "assets/js/97.bc70a6ba.js",
    "revision": "900cb4b292d9b000e85012845efb3139"
  },
  {
    "url": "assets/js/98.3e0af8b3.js",
    "revision": "2fd0f5ea50829a1c20ccf2ff7100c7b5"
  },
  {
    "url": "assets/js/99.264cf17e.js",
    "revision": "37c14350cd99e9445941f4fc4d2d5fb8"
  },
  {
    "url": "assets/js/app.8d89d060.js",
    "revision": "99cd3f91624c219aca0102f2739243ad"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "5afb7ae39ce9839b885ac3b87baf73a1"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "ee205526d8b62060610e0e587a2fbefc"
  },
  {
    "url": "guide/index.html",
    "revision": "48943c57c7a9bf70a0d5de9f666353bc"
  },
  {
    "url": "index.html",
    "revision": "a9898ba473a17f4ad3e3a3243e1005a8"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "bce4c91af6d50f89bcbe00db5c4f259c"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "0b39a07fc235793027342795bc6ed5ce"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "c66fa88261f2f469e599b0ef6243092c"
  },
  {
    "url": "notes/待整理.html",
    "revision": "d9c34f40143111ff71d4a781eff5ab90"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "7c50ed162c781583addd3ab8076b38f5"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "2a09edaf8ebe66c0495323fabe728269"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "61db78426ffa49798cb3881ec7b76ddd"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "54301d816044f122f9c926a29ef44312"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "0c85dafb90c5fffbd0e8a9658b572352"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "4872174bc5727afb7932114d71638379"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "1c827e8dd5352299fb6366c4c8221600"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "c219807388f17dce3a7f0aad481f8879"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "2329abeef0a2f69f5e1766aa68925056"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "f62f66b6a781998b9f405fdf74909059"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "e7a6a8219d41cb886dce1b8537e1cdac"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "b88812fe2bf3e0bbaa789e019e29cbbf"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "5865868b98054a7c29790752090d8f40"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "a196e60f0dd14f60e03b9864390f1edb"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "8b47545ea59bd9b953e20cec4a078a16"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "9c747e11e0a5e777117085afbe637412"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "830bcea27bf84193aadc893205c7ea34"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "f101b068ba5f3428e01cf7e3f01681e2"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "4aae0106c33618284ab2b44f1efc39c7"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "0178f30d243abf6bec40346558f28670"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "f8bf8b11ca07dddb5e171183118b2688"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "ae8d45d27c6185ef93f687386fde32ef"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "3998d89579fe04f252fd7f2be3af5c59"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "527581c163438fd832d7ade7464e0a2b"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "ea7d60c41f108a6b81e9c606fea2c666"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "5b34a1783fa40a56fb493dff8a6cf01d"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "325ff829fba6e6d112ead5d6914f6433"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "0ca9b411a132c8c769be7519094ef360"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "515b7d9bc882bd3839a9e50fad1608aa"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "598df19ef4a45d3a7fe9456b58fabe5b"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "d90f8932d976961aab96867615637f0a"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "0e75ab89f38e10b091e168d7283d00f0"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "5d2326c574851553c5a5ba9fed8130f4"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "b5087faaec0af2856e230d7b61b6efa0"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "f9f030982b9e76be84f113c78af4cef5"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "12218091b1893028cc277d8c9948ad04"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "64c427ab35ab28474220839624c5fde2"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "25d882cf3471a464f27ea2b634e0bc1a"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "7b215c67da7abf7c0aea857a76a56b7f"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "cbaa5aa428464e87bdc603c016e181b9"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "79c5a716ac8e88a41450dc805c1ef611"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "cb568232fb648eb4038dd7fc5ee59a35"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "5767c31e6aa342c1b4c1bbbdd34afc6a"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "a8751b7dce8f5c41ac9b944969de4611"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "4d0e401651e2553428354cc96baffbe2"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "49dc35d84e9b527814596b754ea93f03"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "8927295f1527b6b2fb19c029986ae2ac"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "2c6f4df9b0108c29b17ed1c46bdcd6ce"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "326de047f857b66a436aa6f1cfe1a86a"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "b8325744a3cb4ddcdea53cbb0942e88b"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "aeb6ae0e8780dccd605c93c372c3f1aa"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "c404f1a1e12845f5310b196e3e37c3c6"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "99c801eb46b8ae1d4077e967ea4b9ee4"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "13c7602ab7c556e8e7e05cadbe37991c"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "eda074b328dd61631d60131fd7b5d299"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "13301ff2df046d59fc140665e1d402bd"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "af1938df105118ff35ec3e7abdc3adfc"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "b00521141b41e61c59243c1b70003b9d"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "366de3c6c8cafb0bd045352153372a76"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "f09ca5101aa1c3c99862d7a60be52a3d"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "4490b36a572a98efd8ac24d3128dfbdd"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "6539bc312fb920860de015f2d051d495"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "347c0750cf385830237aa691cd6b359e"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "c7bf1baa82656939ee30398ed69cd203"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "0e4fd063aec7c2acd8c42eb128dc2a11"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "1cc048f0402ec34ad721cc3e9f695ac0"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "bfcc57368656e5858e37ffe5d6765d96"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "c792a9dba47612d71713650c9e6dcf21"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "89ff1ceb3f1852a6f57d6c173e22e544"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "5988c7198fa23b74e5e974fef0af3117"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "ea95375a046b6f269462e0829cb9f14b"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "d86e6cab103507a3b038211d0fd314ea"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "d08c09e9449f4a2d0286642610466218"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "98bc7084c895f2af8d480f10805eb38c"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "a3c610a21b51cb38c4d604a39bc56ecb"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "38bc5b9e7077ec0962818054089d4035"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "95b859d3a13412b475aeab0c62b19f77"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "d453c45ec6604d653a7c57d8b15db06d"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "2ff7f3ed5f13c9b4eec59f44207b7ab4"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "02a15832be8e130640a5d8e64a823006"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "3e78ccee586d88e4692cd4e0ef3b8339"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "2697e791c5f7c9971f3a5c8507718767"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "532451d13671cce04cafa64c3d250d3a"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "d5d3cd2355da9c3a6ffd91cd00a96e94"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "57ea99380be3fcedd84b55ce09977e3d"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "b15d4d4928c41b33d3dd8453e4123c55"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "156a74f62f170ea5ff3dce867a2dca46"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "980ac506c115d6d69d3a0c58c5549cde"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "03c826794db772e70374e4cc30efeb5c"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "45cd5f81e9ac1927aca7cb365e335912"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "e769d0eedf36fea6cdb4a995b6868390"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "7b1f8defee6630df8d67c7b69f2843da"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "82edcef3f1b71934b343c110311a9517"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "7bc3b8712ad2c7cee5f2a0c24b2e0b09"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "c3e286419b8399c263ea14ccb531e390"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "83c1dfd8f6110120535de4c40faaee3b"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "4630d9d9b625a35c6f2b0f212f68a023"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "9b0ad3d5469cd0485973e0724b178b28"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "03262123843bec3e55aecf66339163b5"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "994a0ee33592ea57c497e9994a743e51"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "434da995823b80a09150e6de0fe09fa0"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "c5d1b5f248e60b8afbcac6c6e3190395"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "3296b109138ea3ca63a02cacacebfa1e"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "4963f68b9235555d194870e2e5c5ea81"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "367788a56a5547dde68154b09240daf6"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "f285650e132acbbbc9b576d3a7767080"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "825a82b239f70dc6b47fa75d0b060bcd"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "f0fe8d8121a7e20c585e26be2b2d014b"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "772df6a2f024d21c6f1d821b9d9a9fbe"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "518cbdded7cd3501cd0a4492c63e33ba"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "82ad0b0b9143b87e404f69fe244c2ca1"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "fe248e0063f193cc865a33527cd1a235"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "9d63dca34717b70b91d1648244d1f2bc"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "11a6ffea816ba313e03fbde5e1f9b431"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "568c037ece641edd0e5fe0242b1241fc"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "274fe576125b6e36f96bb14afac9cc3a"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "e28df5ccb67ed35ceed3163773f8a0c2"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "eacb23243b58b35a2bc791ad6ce8c23d"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "fff2340caea2adffe8d2f63b922bde8d"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "0ba00200449ed496f51e3b9c56ae771f"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "2b5c90ebc39032360441f110456a2703"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "b42e69238cafccf166314c4a07253ef3"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "e7d21c9609ddd71534340fa66550309c"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "35ca419821a10226793709a39ac1b3cf"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "35dc529718fa2df0cdcae7b76e8763a0"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "b018a451c84fb8f758d605b633c4c3d2"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "189e9d4c40bf055eb5bfbb82638f8f7d"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "47f10f6c52799b28bdfab79dda639ac3"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "8dbebfe37000133a247647651bf2168e"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "7e266377432c8233d25758d33f717b37"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "22728db29d60fd895490fe5190dd723f"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "9e3c7b1e240557446d941069353fda9b"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "621f2fb5288f2b67070aaf7480a12ba3"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "5659fba6a97553fcd571baeeb3f6aef1"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "284be8ae6c1a7a36fcc194e53eca04e5"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "9dc0057684035a44f57f0ead1825f24f"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "aaa399cdaa1989e511687edb82cc7380"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "74bbd05ee7f5674e061257b72e719f13"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "8cab0f9f6fe36dbb5f8dec4d3e154194"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "7059fd6e3554f00ff051ef441f9c708a"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "d622490b139c5ad589972116cad72929"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "254194b22ac7b18d83cc63468b4a97b8"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "8c5d9f3d3366d8d978f2c48969e9a027"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "236529dcf31320594a9166e85cd0141f"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "9ea0e03c4251c629268f71f6dd5f41fb"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "f54be7f93a972ff2ba51bb5558e2d59d"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "9684706febc218b33cc95bd3e07de53c"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "6fce48da614b14d9ba28aa630651b42f"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "ed9828507c04c211fe4fa859e38c3fff"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "d0ec48c0948ce18cc3b8541ff7c29717"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "b5082b24a9e8d5b3bf9347504acb6010"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "a82e2a1f0708bdbcff17e98f38400fcb"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "9389bc86e9a12631db3eb47c8df5ce39"
  },
  {
    "url": "passages/2019-11-11-wirte-virtual-dom/index.html",
    "revision": "d26e7bd56acc6efe0ad7d577468f8f82"
  },
  {
    "url": "passages/2019-11-23-promise-methods/index.html",
    "revision": "53346372c0ac04e95f4655ca31aa9f02"
  },
  {
    "url": "passages/2019-11-25-how-insist-on-learning/index.html",
    "revision": "89b53335fc45807918f01e7c710d8cff"
  },
  {
    "url": "passages/2019-11-25-promise-a-plus/index.html",
    "revision": "2724d6753be88382cd3dae6947387da8"
  },
  {
    "url": "scripts/baidu-analytics.js",
    "revision": "a670158da0f7dde040f4d39a7e632d13"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
