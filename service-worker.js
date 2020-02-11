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
    "revision": "32a49ab646196987c4ac8eb08a12dab2"
  },
  {
    "url": "assets/css/0.styles.003d3469.css",
    "revision": "34a000a5418b1ba86ac1c8aea8b7bc7c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.53a344c8.js",
    "revision": "312a143bd0319647317c8c0a8f12d918"
  },
  {
    "url": "assets/js/11.774c5b35.js",
    "revision": "d8dadcb888368773411374a1aafcd651"
  },
  {
    "url": "assets/js/12.8f9ce7c9.js",
    "revision": "2db4ae0029242d56261df661ff316232"
  },
  {
    "url": "assets/js/13.a00dc96e.js",
    "revision": "de375578cb6cc337ea80d21628096e34"
  },
  {
    "url": "assets/js/14.aa744144.js",
    "revision": "95fe95ae779da7a9922627d494d5da0d"
  },
  {
    "url": "assets/js/15.1953f6b2.js",
    "revision": "40dca1e44339f4836be12c02c488abf7"
  },
  {
    "url": "assets/js/16.15275b78.js",
    "revision": "effe2354784367c72b550104ea91553c"
  },
  {
    "url": "assets/js/17.8ef7016f.js",
    "revision": "ae119a2c067f238623e2910b98ff432e"
  },
  {
    "url": "assets/js/18.ce1a0558.js",
    "revision": "add476091d26929698495479d0103d4a"
  },
  {
    "url": "assets/js/19.83903e54.js",
    "revision": "5cf187e78b9f25e756966365250ca347"
  },
  {
    "url": "assets/js/20.bedf92bb.js",
    "revision": "a7757027b261694d6fd6a0532afe3c93"
  },
  {
    "url": "assets/js/21.7434ef0a.js",
    "revision": "742a59840dce87ffff5f82d314e598b5"
  },
  {
    "url": "assets/js/22.7a9bd11d.js",
    "revision": "e99f7fea4cd19e3a0d4e2d28d0b46da1"
  },
  {
    "url": "assets/js/23.1539a2a6.js",
    "revision": "96dfa4dbc30746b73bbf76ff74d5820c"
  },
  {
    "url": "assets/js/24.91435939.js",
    "revision": "ec6986e5ac7d11ecb695eff2630e2abf"
  },
  {
    "url": "assets/js/25.8b8d16a1.js",
    "revision": "f746803787e4b662335c97bdcb242309"
  },
  {
    "url": "assets/js/26.7b8c9d10.js",
    "revision": "5715e91f9a8476bd48841fa1d33ec02b"
  },
  {
    "url": "assets/js/27.ee219e5a.js",
    "revision": "6814f471ee3616f3d62f520a03a6f59b"
  },
  {
    "url": "assets/js/28.1d41b81e.js",
    "revision": "1511557dedd7d5d9e52367a4c7678708"
  },
  {
    "url": "assets/js/29.bce8aa6a.js",
    "revision": "c6ebfd9d18f2eca2e713bb173b72b422"
  },
  {
    "url": "assets/js/30.1b49db8c.js",
    "revision": "f265a425830266cc4783721b7f04a5c5"
  },
  {
    "url": "assets/js/31.ed3cd89f.js",
    "revision": "f33aaabf8321aa483f320651030ef841"
  },
  {
    "url": "assets/js/32.f21185dc.js",
    "revision": "ec1d40f8bd904b5ee460ab1f4d12dd6f"
  },
  {
    "url": "assets/js/33.d63ca758.js",
    "revision": "cb22c38c9b78445da91fce935e7390c4"
  },
  {
    "url": "assets/js/34.c2edb17c.js",
    "revision": "454a00bf2663384d61d33cf100b7ff2b"
  },
  {
    "url": "assets/js/35.62eec01e.js",
    "revision": "5568202b7b5897ac8f37253f4888abad"
  },
  {
    "url": "assets/js/36.3831412b.js",
    "revision": "3505396bac87afbe4fbdbb9cdb0b3fcc"
  },
  {
    "url": "assets/js/37.5f5c5c40.js",
    "revision": "ad8b188e6b3ca191413246d40c09d953"
  },
  {
    "url": "assets/js/4.dcc18508.js",
    "revision": "ef15043c38011b3c5b8daa9db9c336cf"
  },
  {
    "url": "assets/js/5.a5e63d96.js",
    "revision": "5608590c37c0eaa106ab7f8cc0c9fa7e"
  },
  {
    "url": "assets/js/6.f900cfa4.js",
    "revision": "7ef8c85ecf4e0b4f98e2f795638d1f50"
  },
  {
    "url": "assets/js/7.49d24c76.js",
    "revision": "dbce73d1ee9573d3b349f59cb0d06c1a"
  },
  {
    "url": "assets/js/8.afd1e80c.js",
    "revision": "d8410d34b629916326417fb1023b3e84"
  },
  {
    "url": "assets/js/9.597c39e3.js",
    "revision": "61367b1baa411048b21a26174e261954"
  },
  {
    "url": "assets/js/app.089f19aa.js",
    "revision": "8e6bf018b0bf1ac89ee06f064a642f1c"
  },
  {
    "url": "assets/js/vendors~flowchart.f5cdfab1.js",
    "revision": "4923f9fbdb349d5320106a0b0ab2a827"
  },
  {
    "url": "assets/js/vendors~notification.7414fc30.js",
    "revision": "4b2fa06e946087714f251475ce5cc89e"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "9e5c51f76b2d736af84bb104a5166f89"
  },
  {
    "url": "javaee/index.html",
    "revision": "718ea5eb12a3b2533dee3961a4426be0"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "deffa107bf8a1489c68d58ff5e6c6734"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "16554001b1aa5b0f6e2da7d3a5c765fc"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "7ed630c9edd311fc2863b7eceaee6fbc"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "45ad8fc3586cdf0dabff5660689a0cac"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "566a2ebac8283fd5b320226fdc9f9900"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "bb4ba4814632e5ef524c6c0ba6021b29"
  },
  {
    "url": "javatool/build/gradle.html",
    "revision": "2bd3cc97d04c8dc3dbae57b187f10bd0"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "bc45203e79b5602bb68062c73e15714a"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "3cf24431d59057b067069f8f78059771"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "a2d7c5e275841bbcccf8d50b7996ee15"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "e2a59303557f3adc6f25d8d13190358b"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "aa2ee5c88a4eacfbf0dd7050548bac1d"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "348bb5d000b0a3524e90f5d6d22fc919"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "fb50e296802a7385b0326f05380ef09b"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "875391993395bd747e2e896b12c9621a"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "eb84e0e48f54cfc26d1def5b379cd838"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "5ac96551b9861c6ba33b8b1fcfa80f64"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "834884d0e7713e89bb21c076c327fcff"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "612445cb17afb1adbb6ce5231c38c0f2"
  },
  {
    "url": "javatool/index.html",
    "revision": "ebda3ef0cb8b5c6fffc3df177a7a512a"
  },
  {
    "url": "javatool/jmeter.html",
    "revision": "0a34d49d9f6839af36bb113f2a984752"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "dbe1c5051facc36541ecf6294bb4b57f"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "a44fdd62e1c39b593b8ebb1858a8d188"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "8b0cb795c407a0a4565bf911af927889"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "675a3dfbd4d7f94525c4e06f3ce52d3e"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "871aa9db123183cc546be73bfdbe6deb"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "6764d09f80ce2062aaa4ac2959598ad2"
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
