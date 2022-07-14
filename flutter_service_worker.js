'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6396bc76c0b4bfb40d80b65ab4ea9a27",
"index.html": "47f4dc000d01561344d165b15dc71ec4",
"/": "47f4dc000d01561344d165b15dc71ec4",
"main.dart.js": "bba5225b804b93c664073c925d7673e6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b9f3a88b557a41ef2261687c26fbce63",
"assets/resources/langs/en.json": "864b87708ad21cbd195e0ec48dab79f8",
"assets/resources/langs/vi.json": "f103ddf459d6b41e84a2dc32bea68abd",
"assets/AssetManifest.json": "98833f7eacadbf598bad982d47f80914",
"assets/NOTICES": "b7a68d8bc61bec94251523b96a34f298",
"assets/FontManifest.json": "309c53a47a29cc487d7bf1408b322d8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/country_code_picker/flags/tg.png": "82dabd3a1a4900ae4866a4da65f373e5",
"assets/packages/country_code_picker/flags/me.png": "74434a1447106cc4fb7556c76349c3da",
"assets/packages/country_code_picker/flags/la.png": "8c88d02c3824eea33af66723d41bb144",
"assets/packages/country_code_picker/flags/mr.png": "733d747ba4ec8cf120d5ebc0852de34a",
"assets/packages/country_code_picker/flags/ni.png": "6985ed1381cb33a5390258795f72e95a",
"assets/packages/country_code_picker/flags/lv.png": "6a86b0357df4c815f1dc21e0628aeb5f",
"assets/packages/country_code_picker/flags/om.png": "79a867771bd9447d372d5df5ec966b36",
"assets/packages/country_code_picker/flags/af.png": "44bc280cbce3feb6ad13094636033999",
"assets/packages/country_code_picker/flags/cy.png": "9a3518f15815fa1705f1d7ca18907748",
"assets/packages/country_code_picker/flags/bj.png": "9b503fbf4131f93fbe7b574b8c74357e",
"assets/packages/country_code_picker/flags/aq.png": "c57c903b39fe5e2ba1e01bc3d330296c",
"assets/packages/country_code_picker/flags/cn.png": "6b8c353044ef5e29631279e0afc1a8c3",
"assets/packages/country_code_picker/flags/gb-sct.png": "075bb357733327ec4115ab5cbba792ac",
"assets/packages/country_code_picker/flags/co.png": "e2fa18bb920565594a0e62427540163c",
"assets/packages/country_code_picker/flags/cx.png": "65421207e2eb319ba84617290bf24082",
"assets/packages/country_code_picker/flags/ag.png": "9bae91983418f15d9b8ffda5ba340c4e",
"assets/packages/country_code_picker/flags/ms.png": "32daa6ee99335b73cb3c7519cfd14a61",
"assets/packages/country_code_picker/flags/md.png": "7b273f5526b88ed0d632fd0fd8be63be",
"assets/packages/country_code_picker/flags/zm.png": "29b67848f5e3864213c84ccf108108ea",
"assets/packages/country_code_picker/flags/vn.png": "7c8f8457485f14482dcab4042e432e87",
"assets/packages/country_code_picker/flags/tf.png": "dc3f8c0d9127aa82cbd45b8861a67bf5",
"assets/packages/country_code_picker/flags/td.png": "51b129223db46adc71f9df00c93c2868",
"assets/packages/country_code_picker/flags/yt.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/lb.png": "b21c8d6f5dd33761983c073f217a0c4f",
"assets/packages/country_code_picker/flags/mf.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/lu.png": "4cc30d7a4c3c3b98f55824487137680d",
"assets/packages/country_code_picker/flags/mq.png": "446edd9300307eda562e5c9ac307d7f2",
"assets/packages/country_code_picker/flags/cz.png": "482c8ba16ff3d81eeef60650db3802e4",
"assets/packages/country_code_picker/flags/ae.png": "045eddd7da0ef9fb3a7593d7d2262659",
"assets/packages/country_code_picker/flags/cm.png": "89f02c01702cb245938f3d62db24f75d",
"assets/packages/country_code_picker/flags/bi.png": "fb60b979ef7d78391bb32896af8b7021",
"assets/packages/country_code_picker/flags/ar.png": "bd71b7609d743ab9ecfb600e10ac7070",
"assets/packages/country_code_picker/flags/as.png": "830d17d172d2626e13bc6397befa74f3",
"assets/packages/country_code_picker/flags/bh.png": "6e48934b768705ca98a7d1e56422dc83",
"assets/packages/country_code_picker/flags/cl.png": "658cdc5c9fd73213495f1800ce1e2b78",
"assets/packages/country_code_picker/flags/ad.png": "796914c894c19b68adf1a85057378dbc",
"assets/packages/country_code_picker/flags/mp.png": "60b14b06d1ce23761767b73d54ef613a",
"assets/packages/country_code_picker/flags/lt.png": "e38382f3f7cb60cdccbf381cea594d2d",
"assets/packages/country_code_picker/flags/mg.png": "a562a819338427e57c57744bb92b1ef1",
"assets/packages/country_code_picker/flags/lc.png": "055c35de209c63b67707c5297ac5079a",
"assets/packages/country_code_picker/flags/tr.png": "0100620dedad6034185d0d53f80287bd",
"assets/packages/country_code_picker/flags/ua.png": "dbd97cfa852ffc84bfdf98bc2a2c3789",
"assets/packages/country_code_picker/flags/tv.png": "493c543f07de75f222d8a76506c57989",
"assets/packages/country_code_picker/flags/vi.png": "944281795d5daf17a273f394e51b8b79",
"assets/packages/country_code_picker/flags/mt.png": "808538b29f6b248469a184bbf787a97f",
"assets/packages/country_code_picker/flags/no.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/mc.png": "412ce0b1f821e3912e83ae356b30052e",
"assets/packages/country_code_picker/flags/ch.png": "8d7a211fd742d4dea9d1124672b88cda",
"assets/packages/country_code_picker/flags/bl.png": "30f55fe505cb4f3ddc09a890d4073ebe",
"assets/packages/country_code_picker/flags/aw.png": "8966dbf74a9f3fd342b8d08768e134cc",
"assets/packages/country_code_picker/flags/bz.png": "e95df47896e2a25df726c1dccf8af9ab",
"assets/packages/country_code_picker/flags/bm.png": "eb2492b804c9028f3822cdb1f83a48e2",
"assets/packages/country_code_picker/flags/ci.png": "0f94edf22f735b4455ac7597efb47ca5",
"assets/packages/country_code_picker/flags/mu.png": "aec293ef26a9df356ea2f034927b0a74",
"assets/packages/country_code_picker/flags/us.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/tw.png": "94322a94d308c89d1bc7146e05f1d3e5",
"assets/packages/country_code_picker/flags/ye.png": "1d5dcbcbbc8de944c3db228f0c089569",
"assets/packages/country_code_picker/flags/mw.png": "efc0c58b76be4bf1c3efda589b838132",
"assets/packages/country_code_picker/flags/nl.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/ls.png": "f2d4025bf560580ab141810a83249df0",
"assets/packages/country_code_picker/flags/bo.png": "92c247480f38f66397df4eb1f8ff0a68",
"assets/packages/country_code_picker/flags/at.png": "7edbeb0f5facb47054a894a5deb4533c",
"assets/packages/country_code_picker/flags/ck.png": "35c6c878d96485422e28461bb46e7d9f",
"assets/packages/country_code_picker/flags/by.png": "03f5334e6ab8a537d0fc03d76a4e0c8a",
"assets/packages/country_code_picker/flags/au.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/bn.png": "94d863533155418d07a607b52ca1b701",
"assets/packages/country_code_picker/flags/ma.png": "dd5dc19e011755a7610c1e7ccd8abdae",
"assets/packages/country_code_picker/flags/nz.png": "b48a5e047a5868e59c2abcbd8387082d",
"assets/packages/country_code_picker/flags/lr.png": "1c159507670497f25537ad6f6d64f88d",
"assets/packages/country_code_picker/flags/mv.png": "69843b1ad17352372e70588b9c37c7cc",
"assets/packages/country_code_picker/flags/tc.png": "6f2d1a2b9f887be4b3568169e297a506",
"assets/packages/country_code_picker/flags/ug.png": "6ae26af3162e5e3408cb5c5e1c968047",
"assets/packages/country_code_picker/flags/tt.png": "716fa6f4728a25ffccaf3770f5f05f7b",
"assets/packages/country_code_picker/flags/pl.png": "a7b46e3dcd5571d40c3fa8b62b1f334a",
"assets/packages/country_code_picker/flags/rs.png": "ee9ae3b80531d6d0352a39a56c5130c0",
"assets/packages/country_code_picker/flags/in.png": "be8bf440db707c1cc2ff9dd0328414e5",
"assets/packages/country_code_picker/flags/ge.png": "93d6c82e9dc8440b706589d086be2c1c",
"assets/packages/country_code_picker/flags/gr.png": "86aeb970a79aa561187fa8162aee2938",
"assets/packages/country_code_picker/flags/gs.png": "524d0f00ee874af0cdf3c00f49fa17ae",
"assets/packages/country_code_picker/flags/gd.png": "42ad178232488665870457dd53e2b037",
"assets/packages/country_code_picker/flags/io.png": "8021829259b5030e95f45902d30f137c",
"assets/packages/country_code_picker/flags/hk.png": "51df04cf3db3aefd1778761c25a697dd",
"assets/packages/country_code_picker/flags/kp.png": "fd6e44b3fe460988afbfd0cb456282b2",
"assets/packages/country_code_picker/flags/gb-nir.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/kg.png": "a9b6a1b8fe03b8b617f30a28a1d61c12",
"assets/packages/country_code_picker/flags/pm.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/sv.png": "994c8315ced2a4d8c728010447371ea1",
"assets/packages/country_code_picker/flags/re.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/sa.png": "ef836bd02f745af03aa0d01003942d44",
"assets/packages/country_code_picker/flags/sc.png": "52f9bd111531041468c89ce9da951026",
"assets/packages/country_code_picker/flags/st.png": "7a28a4f0333bf4fb4f34b68e65c04637",
"assets/packages/country_code_picker/flags/ke.png": "034164976de81ef96f47cfc6f708dde6",
"assets/packages/country_code_picker/flags/im.png": "17ddc1376b22998731ccc5295ba9db1c",
"assets/packages/country_code_picker/flags/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/packages/country_code_picker/flags/gf.png": "71678ea3b4a8eeabd1e64a60eece4256",
"assets/packages/country_code_picker/flags/dj.png": "dc144d9502e4edb3e392d67965f7583e",
"assets/packages/country_code_picker/flags/gq.png": "0dc3ca0cda7dfca81244e1571a4c466c",
"assets/packages/country_code_picker/flags/gp.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/dk.png": "f9d6bcded318f5910b8bc49962730afa",
"assets/packages/country_code_picker/flags/gg.png": "cdb11f97802d458cfa686f33459f0d4b",
"assets/packages/country_code_picker/flags/il.png": "b72b572cc199bf03eba1c008cd00d3cb",
"assets/packages/country_code_picker/flags/pn.png": "ffa91e8a1df1eac6b36d737aa76d701b",
"assets/packages/country_code_picker/flags/sb.png": "e3a6704b7ba2621480d7074a6e359b03",
"assets/packages/country_code_picker/flags/py.png": "6bb880f2dd24622093ac59d4959ae70d",
"assets/packages/country_code_picker/flags/ru.png": "9a3b50fcf2f7ae2c33aa48b91ab6cd85",
"assets/packages/country_code_picker/flags/kw.png": "b2afbb748e0b7c0b0c22f53e11e7dd55",
"assets/packages/country_code_picker/flags/do.png": "a05514a849c002b2a30f420070eb0bbb",
"assets/packages/country_code_picker/flags/gt.png": "df7a020c2f611bdcb3fa8cd2f581b12f",
"assets/packages/country_code_picker/flags/gb.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/gu.png": "babddec7750bad459ca1289d7ac7fc6a",
"assets/packages/country_code_picker/flags/je.png": "8d6482f71bd0728025134398fc7c6e58",
"assets/packages/country_code_picker/flags/hm.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/sg.png": "94ea82acf1aa0ea96f58c6b0cd1ed452",
"assets/packages/country_code_picker/flags/pk.png": "0228ceefa355b34e8ec3be8bfd1ddb42",
"assets/packages/country_code_picker/flags/sr.png": "e5719b1a8ded4e5230f6bac3efc74a90",
"assets/packages/country_code_picker/flags/se.png": "24d2bed25b5aad316134039c2903ac59",
"assets/packages/country_code_picker/flags/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/packages/country_code_picker/flags/gw.png": "25bc1b5542dadf2992b025695baf056c",
"assets/packages/country_code_picker/flags/eh.png": "f781a34a88fa0adf175e3aad358575ed",
"assets/packages/country_code_picker/flags/dz.png": "93afdc9291f99de3dd88b29be3873a20",
"assets/packages/country_code_picker/flags/ga.png": "fa05207326e695b552e0a885164ee5ac",
"assets/packages/country_code_picker/flags/fr.png": "79cbece941f09f9a9a46d42cabd523b1",
"assets/packages/country_code_picker/flags/dm.png": "b7ab53eeee4303e193ea1603f33b9c54",
"assets/packages/country_code_picker/flags/hn.png": "09ca9da67a9c84f4fc25f96746162f3c",
"assets/packages/country_code_picker/flags/sd.png": "93e252f26bead630c0a0870de5a88f14",
"assets/packages/country_code_picker/flags/rw.png": "6ef05d29d0cded56482b1ad17f49e186",
"assets/packages/country_code_picker/flags/ph.png": "de75e3931c41ae8b9cae8823a9500ca7",
"assets/packages/country_code_picker/flags/ss.png": "f1c99aded110fc8a0bc85cd6c63895fb",
"assets/packages/country_code_picker/flags/qa.png": "b95e814a13e5960e28042347cec5bc0d",
"assets/packages/country_code_picker/flags/pe.png": "724d3525f205dfc8705bb6e66dd5bdff",
"assets/packages/country_code_picker/flags/pr.png": "ac1c4bcef3da2034e1668ab1e95ae82d",
"assets/packages/country_code_picker/flags/si.png": "922d047a95387277f84fdc246f0a8d11",
"assets/packages/country_code_picker/flags/ht.png": "009d5c3627c89310bd25522b636b09bf",
"assets/packages/country_code_picker/flags/es.png": "e180e29212048d64951449cc80631440",
"assets/packages/country_code_picker/flags/gl.png": "d09f355715f608263cf0ceecd3c910ed",
"assets/packages/country_code_picker/flags/gm.png": "c670404188a37f5d347d03947f02e4d7",
"assets/packages/country_code_picker/flags/er.png": "08a95adef16cb9174f183f8d7ac1102b",
"assets/packages/country_code_picker/flags/fi.png": "a79f2dbc126dac46e4396fcc80942a82",
"assets/packages/country_code_picker/flags/ee.png": "54aa1816507276a17070f395a4a89e2e",
"assets/packages/country_code_picker/flags/kn.png": "65d2fc69949162f1bc14eb9f2da5ecbc",
"assets/packages/country_code_picker/flags/hu.png": "66c22db579470694c7928598f6643cc6",
"assets/packages/country_code_picker/flags/iq.png": "dc9f3e8ab93b20c33f4a4852c162dc1e",
"assets/packages/country_code_picker/flags/ky.png": "666d01aa03ecdf6b96202cdf6b08b732",
"assets/packages/country_code_picker/flags/sh.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/ps.png": "b6e1bd808cf8e5e3cd2b23e9cf98d12e",
"assets/packages/country_code_picker/flags/pf.png": "3ba7f48f96a7189f9511a7f77ea0a7a4",
"assets/packages/country_code_picker/flags/sj.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/id.png": "78d94c7d31fed988e9b92279895d8b05",
"assets/packages/country_code_picker/flags/is.png": "22358dadd1d5fc4f11fcb3c41d453ec0",
"assets/packages/country_code_picker/flags/eg.png": "9e371179452499f2ba7b3c5ff47bec69",
"assets/packages/country_code_picker/flags/fk.png": "0e9d14f59e2e858cd0e89bdaec88c2c6",
"assets/packages/country_code_picker/flags/fj.png": "6030dc579525663142e3e8e04db80154",
"assets/packages/country_code_picker/flags/gn.png": "765a0434cb071ad4090a8ea06797a699",
"assets/packages/country_code_picker/flags/gy.png": "75f8dd61ddedb3cf595075e64fc80432",
"assets/packages/country_code_picker/flags/ir.png": "df9b6d2134d1c5d4d3e676d9857eb675",
"assets/packages/country_code_picker/flags/km.png": "204a44c4c89449415168f8f77c4c0d31",
"assets/packages/country_code_picker/flags/ie.png": "5790c74e53070646cd8a06eec43e25d6",
"assets/packages/country_code_picker/flags/kz.png": "cfce5cd7842ef8091b7c25b23c3bb069",
"assets/packages/country_code_picker/flags/ro.png": "1ee3ca39dbe79f78d7fa903e65161fdb",
"assets/packages/country_code_picker/flags/sk.png": "0f8da623c8f140ac2b5a61234dd3e7cd",
"assets/packages/country_code_picker/flags/pg.png": "06961c2b216061b0e40cb4221abc2bff",
"assets/packages/country_code_picker/flags/pt.png": "b4cf39fbafb4930dec94f416e71fc232",
"assets/packages/country_code_picker/flags/so.png": "cfe6bb95bcd259a3cc41a09ee7ca568b",
"assets/packages/country_code_picker/flags/sx.png": "8fce7986b531ff8936540ad1155a5df5",
"assets/packages/country_code_picker/flags/hr.png": "04cfd167b9564faae3b2dd3ef13a0794",
"assets/packages/country_code_picker/flags/ki.png": "69a7d5a8f6f622e6d2243f3f04d1d4c0",
"assets/packages/country_code_picker/flags/jm.png": "3537217c5eeb048198415d398e0fa19e",
"assets/packages/country_code_picker/flags/eu.png": "b32e3d089331f019b61399a1df5a763a",
"assets/packages/country_code_picker/flags/ec.png": "cbaf1d60bbcde904a669030e1c883f3e",
"assets/packages/country_code_picker/flags/et.png": "2c5eec0cda6655b5228fe0e9db763a8e",
"assets/packages/country_code_picker/flags/fo.png": "0bfc387f2eb3d9b85225d61b515ee8fc",
"assets/packages/country_code_picker/flags/kh.png": "cd50a67c3b8058585b19a915e3635107",
"assets/packages/country_code_picker/flags/sy.png": "2e33ad23bffc935e4a06128bc5519a2b",
"assets/packages/country_code_picker/flags/sn.png": "25201e1833a1b642c66c52a09b43f71e",
"assets/packages/country_code_picker/flags/pw.png": "92ec1edf965de757bc3cca816f4cebbd",
"assets/packages/country_code_picker/flags/sl.png": "a7785c2c81149afab11a5fa86ee0edae",
"assets/packages/country_code_picker/flags/gb-eng.png": "0b05e615c5a3feee707a4d72009cd767",
"assets/packages/country_code_picker/flags/fm.png": "d4dffd237271ddd37f3bbde780a263bb",
"assets/packages/country_code_picker/flags/gi.png": "58894db0e25e9214ec2271d96d4d1623",
"assets/packages/country_code_picker/flags/de.png": "6f94b174f4a02f3292a521d992ed5193",
"assets/packages/country_code_picker/flags/gh.png": "c73432df8a63fb674f93e8424eae545f",
"assets/packages/country_code_picker/flags/jo.png": "d5bfa96801b7ed670ad1be55a7bd94ed",
"assets/packages/country_code_picker/flags/it.png": "99f67d3c919c7338627d922f552c8794",
"assets/packages/country_code_picker/flags/pa.png": "49d53d64564555ea5976c20ea9365ea6",
"assets/packages/country_code_picker/flags/sz.png": "5e45a755ac4b33df811f0fb76585270e",
"assets/packages/country_code_picker/flags/sm.png": "b41d5b7eb3679c2e477fbd25f5ee9e7d",
"assets/packages/country_code_picker/flags/tn.png": "87f591537e0a5f01bb10fe941798d4e4",
"assets/packages/country_code_picker/flags/ml.png": "1a3a39e5c9f2fdccfb6189a117d04f72",
"assets/packages/country_code_picker/flags/cg.png": "7ea7b458a77558527c030a5580b06779",
"assets/packages/country_code_picker/flags/ax.png": "ffffd1de8a677dc02a47eb8f0e98d9ac",
"assets/packages/country_code_picker/flags/ao.png": "d19240c02a02e59c3c1ec0959f877f2e",
"assets/packages/country_code_picker/flags/bt.png": "3c0fed3f67d5aa1132355ed76d2a14d0",
"assets/packages/country_code_picker/flags/an.png": "469f91bffae95b6ad7c299ac800ee19d",
"assets/packages/country_code_picker/flags/bb.png": "a5bb4503d41e97c08b2d4a9dd934fa30",
"assets/packages/country_code_picker/flags/cf.png": "625ad124ba8147122ee198ae5b9f061e",
"assets/packages/country_code_picker/flags/mm.png": "b664dc1c591c3bf34ad4fd223922a439",
"assets/packages/country_code_picker/flags/li.png": "3cf7e27712e36f277ca79120c447e5d1",
"assets/packages/country_code_picker/flags/na.png": "3499146c4205c019196f8a0f7a7aa156",
"assets/packages/country_code_picker/flags/mz.png": "40a78c6fa368aed11b3d483cdd6973a5",
"assets/packages/country_code_picker/flags/to.png": "a93fdd2ace7777e70528936a135f1610",
"assets/packages/country_code_picker/flags/vg.png": "0f19ce4f3c92b0917902cb316be492ba",
"assets/packages/country_code_picker/flags/ve.png": "f5dabf05e3a70b4eeffa5dad32d10a67",
"assets/packages/country_code_picker/flags/tz.png": "389451347d28584d88b199f0cbe0116b",
"assets/packages/country_code_picker/flags/tm.png": "3fe5e44793aad4e8997c175bc72fda06",
"assets/packages/country_code_picker/flags/mx.png": "b69db8e7f14b18ddd0e3769f28137552",
"assets/packages/country_code_picker/flags/nc.png": "a3ee8fc05db66f7ce64bce533441da7f",
"assets/packages/country_code_picker/flags/mo.png": "da3700f98c1fe1739505297d1efb9e12",
"assets/packages/country_code_picker/flags/lk.png": "56412c68b1d952486f2da6c1318adaf2",
"assets/packages/country_code_picker/flags/cd.png": "072243e38f84b5d2a7c39092fa883dda",
"assets/packages/country_code_picker/flags/al.png": "af06d6e1028d16ec472d94e9bf04d593",
"assets/packages/country_code_picker/flags/bw.png": "04fa1f47fc150e7e10938a2f497795be",
"assets/packages/country_code_picker/flags/cr.png": "475b2d72352df176b722da898490afa2",
"assets/packages/country_code_picker/flags/bv.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/am.png": "2de892fa2f750d73118b1aafaf857884",
"assets/packages/country_code_picker/flags/az.png": "967d8ee83bfe2f84234525feab9d1d4c",
"assets/packages/country_code_picker/flags/ba.png": "9faf88de03becfcd39b6231e79e51c2e",
"assets/packages/country_code_picker/flags/mn.png": "02af8519f83d06a69068c4c0f6463c8a",
"assets/packages/country_code_picker/flags/nu.png": "c8bb4da14b8ffb703036b1bae542616d",
"assets/packages/country_code_picker/flags/my.png": "7b4bc8cdef4f7b237791c01f5e7874f4",
"assets/packages/country_code_picker/flags/tl.png": "b3475faa9840f875e5ec38b0e6a6c170",
"assets/packages/country_code_picker/flags/ws.png": "8cef2c9761d3c8107145d038bf1417ea",
"assets/packages/country_code_picker/flags/th.png": "d4bd67d33ed4ac74b4e9b75d853dae02",
"assets/packages/country_code_picker/flags/xk.png": "b75ba9ad218b109fca4ef1f3030936f1",
"assets/packages/country_code_picker/flags/nf.png": "9a4a607db5bc122ff071cbfe58040cf7",
"assets/packages/country_code_picker/flags/ly.png": "777f861e476f1426bf6663fa283243e5",
"assets/packages/country_code_picker/flags/ai.png": "cfb0f715fc17e9d7c8662987fbe30867",
"assets/packages/country_code_picker/flags/br.png": "8fa9d6f8a64981d554e48f125c59c924",
"assets/packages/country_code_picker/flags/cv.png": "60d75c9d0e0cd186bb1b70375c797a0c",
"assets/packages/country_code_picker/flags/be.png": "498270989eaefce71c393075c6e154c8",
"assets/packages/country_code_picker/flags/ca.png": "bc87852952310960507a2d2e590c92bf",
"assets/packages/country_code_picker/flags/bd.png": "5fbfa1a996e6da8ad4c5f09efc904798",
"assets/packages/country_code_picker/flags/cw.png": "db36ed08bfafe9c5d0d02332597676ca",
"assets/packages/country_code_picker/flags/bs.png": "814a9a20dd15d78f555e8029795821f3",
"assets/packages/country_code_picker/flags/ng.png": "15b7ad41c03c87b9f30c19d37f457817",
"assets/packages/country_code_picker/flags/mk.png": "8b17ec36efa149749b8d3fd59f55974b",
"assets/packages/country_code_picker/flags/np.png": "35e3d64e59650e1f1cf909f5c6d85176",
"assets/packages/country_code_picker/flags/va.png": "cfbf48f8fcaded75f186d10e9d1408fd",
"assets/packages/country_code_picker/flags/uz.png": "d3713ea19c37aaf94975c3354edd7bb7",
"assets/packages/country_code_picker/flags/um.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/tk.png": "87e390b384b39af41afd489e42b03e07",
"assets/packages/country_code_picker/flags/vc.png": "a604d5acd8c7be6a2bbaa1759ac2949d",
"assets/packages/country_code_picker/flags/zw.png": "d5c4fe9318ebc1a68e3445617215195f",
"assets/packages/country_code_picker/flags/nr.png": "f5ae3c51dfacfd6719202b4b24e20131",
"assets/packages/country_code_picker/flags/ne.png": "a152defcfb049fa960c29098c08e3cd3",
"assets/packages/country_code_picker/flags/cu.png": "8d4a05799ef3d6bbe07b241dd4398114",
"assets/packages/country_code_picker/flags/bq.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/bf.png": "9b91173a8f8bb52b1eca2e97908f55dd",
"assets/packages/country_code_picker/flags/bg.png": "d591e9fa192837524f57db9ab2020a9e",
"assets/packages/country_code_picker/flags/cc.png": "126eedd79580be7279fec9bb78add64d",
"assets/packages/country_code_picker/flags/gb-wls.png": "72005cb7be41ac749368a50a9d9f29ee",
"assets/packages/country_code_picker/flags/mh.png": "2a7c77b8b1b4242c6aa8539babe127a7",
"assets/packages/country_code_picker/flags/za.png": "aa749828e6cf1a3393e0d5c9ab088af0",
"assets/packages/country_code_picker/flags/uy.png": "20c63ac48df3e394fa242d430276a988",
"assets/packages/country_code_picker/flags/wf.png": "4d33c71f87a33e47a0e466191c4eb3db",
"assets/packages/country_code_picker/flags/vu.png": "1bed31828f3b7e0ff260f61ab45396ad",
"assets/packages/country_code_picker/flags/tj.png": "2407ba3e581ffd6c2c6b28e9692f9e39",
"assets/packages/country_code_picker/i18n/zh.json": "bbabbd76b94c0f63ad9aa880f5c23d43",
"assets/packages/country_code_picker/i18n/de.json": "d8b87bb657b9438677c4b08caf6cd52f",
"assets/packages/country_code_picker/i18n/pt.json": "4a3aaf2f334359822f3d781045ad8606",
"assets/packages/country_code_picker/i18n/en.json": "8fe204625d66a906988add1c4d372972",
"assets/packages/country_code_picker/i18n/it.json": "346d53d5123fd692766a686887a75355",
"assets/packages/country_code_picker/i18n/fr.json": "8a8c0f13bb50d940bbc1bb046dd360cf",
"assets/packages/country_code_picker/i18n/ko.json": "460d6dc9bc98fed196d7f08721265dc7",
"assets/packages/country_code_picker/i18n/es.json": "ccfbb564f963b9738e0ca6dcefa81286",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/SFUIText-Medium.ttf": "e4286ca7dd7b3af5fad228ebcb84842b",
"assets/fonts/SFUIText-Regular.ttf": "1e1d803a7a614c854ce213acf143edc2",
"assets/fonts/SFUIText-Bold.ttf": "49d167fd00ec879e285af5661cc763aa",
"assets/fonts/SFUIText-Light.ttf": "09380894bdc6e0ec20a5995e826ca4c9",
"assets/fonts/Nunito-Regular.ttf": "e9f64790b131c08d6b34a9ecdc453876",
"assets/fonts/Nunito-SemiBold.ttf": "bb52b80a026d5b8ab09c4640b711153a",
"assets/fonts/Nunito-Bold.ttf": "a8c930b08cd5fda37ea9f1c105d1ac61",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/loy_logo.svg": "16596e9594ec484b345117f57e1c4fc8",
"assets/assets/svg/OE_Logo.svg": "9e6f19f075d1a3a99b199e8f3eb7eea7",
"assets/assets/images/blank_profile.png": "91deac785747961d896ce2246d053c37",
"assets/assets/images/ic_visa.png": "d82f3b591ff58626870415478629a200",
"assets/assets/images/email.png": "3d9e8250055cc41d5220fe01414596e0",
"assets/assets/images/member_tier_bg.png": "8f47d12c32a7bb3a3aa6ecd57d4d1e76",
"assets/assets/images/ic_correct2.png": "c18740a716ea52b31c53bcdd10720935",
"assets/assets/images/arrow_right.png": "31377fe66f46914fee98b248b1aad96f",
"assets/assets/images/booking.png": "b73482f9dd6f0aef1451c45aedffed2d",
"assets/assets/images/calendar_grey.png": "918a8b3f4aa6f0d98f2d5ad9651dfc6b",
"assets/assets/images/map-pin2.png": "e62f7fc1646e7da389089d5c54a6ea2d",
"assets/assets/images/wallet_ic.png": "911d0f8b32dbb8c2601bfe619d07f715",
"assets/assets/images/redeem_success_bg.png": "8b15358b54e917542521b52e098c4b47",
"assets/assets/images/check_icon.png": "91d99fbdfa1a666956e6ed912c3e5c5a",
"assets/assets/images/vi_flag.png": "427848022aa8b37c712f3c63fe2b0cc1",
"assets/assets/images/dollar_icon.png": "f508eccb64849cc732c3aa3f54222cdd",
"assets/assets/images/ic_HDBank.png": "456f4c8456d26324cd533eec06fe8dca",
"assets/assets/images/ic_correct_white.png": "0546c192309885dfc9a1dbd50f3f0a29",
"assets/assets/images/ic_crown.png": "c7f25f91a20568a77180d306f860c798",
"assets/assets/images/profile_ic_active.png": "8740165be00babadfdb0898597d93b3e",
"assets/assets/images/remove_icon.png": "36f5b5eafebb337d61d59e0f76a900df",
"assets/assets/images/star_icon.png": "7e5e289b95951531e9bd1f0cd06e72f1",
"assets/assets/images/no-image.jpg": "24998ac0c6cdb273cda388b7b546d53b",
"assets/assets/images/camera_ic_active.png": "d290fb69f40b58e3b43961f0e20dbf54",
"assets/assets/images/rewards.png": "a4bae8320a0c02ff34f097e4fe1a2772",
"assets/assets/images/ic_banking.png": "a90e63e53bc7a22553f66ba765b74bfa",
"assets/assets/images/store_ic_active.png": "9eb6b58aebbf7fe95cd242ba40224299",
"assets/assets/images/dot.png": "343eaf51ae78ef5311e389a7e4961ea1",
"assets/assets/images/ic_silver.png": "19a545098a3a695c75909fa859947610",
"assets/assets/images/uk_flag.png": "8abf81e846e448be4ea6fcadd6bd8ecb",
"assets/assets/images/ic_loyalty_coint.png": "83fdfa7ca92781f0e9f276c4b5b9ec36",
"assets/assets/images/ic_msCard.png": "697f45091870f9e92329021266b74ab2",
"assets/assets/images/ic_diamond.png": "c3520ea80932ee8a2fada7cceeee995d",
"assets/assets/images/logos/oe_logo.png": "e1aa3fd51ef888ad4844ee15fa801e79",
"assets/assets/images/list_view.png": "b3e9522d8b722fb119f6434f390e5ca2",
"assets/assets/images/ic_doubleCard.png": "88fc5db6ac7d7c09b90c8eedf980169a",
"assets/assets/images/loyalty/shopping_cart.png": "77ac72fb284cffde3b2624de7262f8cb",
"assets/assets/images/loyalty/non_verify.png": "a96874ce1cdc400a58b3acc9959f23be",
"assets/assets/images/loyalty/check.png": "48acb4b24f419e8a264861faa2bc0925",
"assets/assets/images/loyalty/offer_icon.png": "dbb10e155a622cf1243827604b2aa2dc",
"assets/assets/images/loyalty/link_icon.png": "4b263347623648884d5acf9aa035370f",
"assets/assets/images/loyalty/card_icon.png": "5fcf0a400c56eb9137a01e948c96e8d5",
"assets/assets/images/loyalty/app_launcher_icon_hd.png": "869a6dd1390ac9f1deb0c099c71b481a",
"assets/assets/images/loyalty/pay_ic.png": "cbd0db89986277c9b29e9a73ebf7d016",
"assets/assets/images/loyalty/demo1.png": "5585888a9bc7018b59042514468a87bb",
"assets/assets/images/loyalty/store1.png": "54f54872f538f34fb34683362de08bfb",
"assets/assets/images/loyalty/remove_icon.png": "d00e6a87b0b0e428bdf4ca277f322e09",
"assets/assets/images/loyalty/hd_rewards.png": "500bd2c1c871a758c09a0ae55c8a5344",
"assets/assets/images/loyalty/demo2.png": "1e85bcd374f8ea5c5ac779a027655ef9",
"assets/assets/images/loyalty/smac_logo.png": "a027914e3e4b5e35fa47ebd5b7e87540",
"assets/assets/images/loyalty/wallet3.png": "04d206eb837bd58eb6d6736863c8a2ad",
"assets/assets/images/loyalty/wallet2.png": "1f273daf98a7cc7977afc90b397e5f96",
"assets/assets/images/loyalty/user_verify.png": "20579b4b343dad6e694e2a612e5f3b02",
"assets/assets/images/loyalty/reward_icon.png": "bb32fe79fd50fbf0e5d391216c736844",
"assets/assets/images/loyalty/icon_vip2.png": "554c43e0edcc1a53291d03a11ca94bbf",
"assets/assets/images/loyalty/ic_loyalty_coint.png": "83fdfa7ca92781f0e9f276c4b5b9ec36",
"assets/assets/images/loyalty/back_card_verify.png": "84c162608a5641a33c1d510f7b795031",
"assets/assets/images/loyalty/transaction_icon4.png": "1b94553ac9e2f6f6fd158e98f0295d06",
"assets/assets/images/loyalty/wallet1.png": "bbdf4b5965d136ac9781b659d08e9878",
"assets/assets/images/loyalty/pos_history.png": "b25d877a699716b3b1c5a5a595deb033",
"assets/assets/images/loyalty/m_dollar_no_backgr.png": "b30784bdb4ae3702c6888d8bb7aee188",
"assets/assets/images/loyalty/transaction_icon1.png": "27771beb5c6348fb125bb9381fd1f3d9",
"assets/assets/images/loyalty/demo.png": "48a1e6da1099fbdcb10802c101307ac4",
"assets/assets/images/loyalty/cam_verify.png": "fb10dc92437bbad06e0c467caecbafb8",
"assets/assets/images/loyalty/change_icon.png": "155b5d6c000fd12d42501221d6dc5e0e",
"assets/assets/images/loyalty/gift_point_icon.png": "c58741ff8c53ab03fc6c47b224906b7e",
"assets/assets/images/loyalty/transaction_icon3.png": "5577548ed7999be20192bff22a2c2145",
"assets/assets/images/loyalty/member_code_icon.png": "98da80a0aecb2c5a7dabc4a3dfced92a",
"assets/assets/images/loyalty/transaction_icon2.png": "6bd110bab9a0e1550905bae99e25b743",
"assets/assets/images/loyalty/loy_logo.png": "09c7fc282b513c5a528f38ffec5ebec3",
"assets/assets/images/loyalty/checked_acc.png": "87ff9ffcb0a3d1a93f0a551feb25c84e",
"assets/assets/images/loyalty/member_card1.png": "ad41b6c9903b10193ab68341e377f872",
"assets/assets/images/loyalty/notice_icon.png": "ae4e91676979710e59369bccd7c7d74a",
"assets/assets/images/loyalty/reverse_point_icon.png": "9fba523a18ac174ee755455d6acfe8a8",
"assets/assets/images/loyalty/recharge_image.png": "b2b8504e7e25cc985ba1421dee18e11a",
"assets/assets/images/loyalty/notification_icon.png": "c5c82b50fd94e4ef8ab8259ecf3470a9",
"assets/assets/images/loyalty/wallet_icon.png": "5aa4f1f351ddaf5e3600a22ca1d43bd8",
"assets/assets/images/loyalty/linkCard.png": "a069eb779689bce5806aea4e1c0cd4e5",
"assets/assets/images/loyalty/un_check.png": "5de98b35c061bd08e2fa2dfa0f4b22d5",
"assets/assets/images/loyalty/hd_bank_image.png": "fbf95a85861849a952b38acdec5f51ea",
"assets/assets/images/loyalty/vip_icon2.png": "a9e8c8c818ef023f504c7c2df5b3dac0",
"assets/assets/images/loyalty/logout_icon.png": "016e970c0150885d9dce5f1b0f8f8d90",
"assets/assets/images/loyalty/codeImage.png": "331a28d54915d1b9fe49c8091be782a4",
"assets/assets/images/loyalty/cancel_icon.png": "60996d6f90a8a5ec9900f993520b1ffd",
"assets/assets/images/loyalty/member_code_1.png": "22ef080ff66e33f85fcdc3df2f64365a",
"assets/assets/images/loyalty/location_icon.png": "a2d9bb3b26ff890a434f4bbd9ae6a261",
"assets/assets/images/loyalty/wallet_icon2.png": "b1a00263df4ed30b0e6dd1ae86f897bb",
"assets/assets/images/loyalty/member_code_2.png": "83a09fcd65293145cc2256454d7ecc2c",
"assets/assets/images/loyalty/history_icon.png": "a2ee2aacbbdda8b180ed812f93e5e8bb",
"assets/assets/images/loyalty/check_redeem_now.png": "c3afc0b724c980514928ec4e3c39cc10",
"assets/assets/images/loyalty/touch_id.png": "c94fedd2237179d280a71d8d0389ed83",
"assets/assets/images/loyalty/notice_verify.png": "9effed56730298e9a098c077d46dcdaa",
"assets/assets/images/loyalty/qrcode_image.png": "ab3f70e067ff50797c7a9db72db2f5ec",
"assets/assets/images/loyalty/with_drawal_image.png": "83e798ab610f3d28bb5c54ce31eb4cf8",
"assets/assets/images/loyalty/vip_icon.png": "d2f0e75e39b99adb7f1d6eb9215c0186",
"assets/assets/images/loyalty/icon_check.png": "5fb75fefb9490d4adf65364008b55f1d",
"assets/assets/images/loyalty/time_icon.png": "25c217d002dc6b30d6ddfca0f55eaaf7",
"assets/assets/images/loyalty/icon_mobi_yelloGradient.png": "0575ac371ac67a8df8e223ffe07b2875",
"assets/assets/images/loyalty/barcode.png": "f3ccd8414c0399bb9e843aaabb976f30",
"assets/assets/images/loyalty/regis_success.png": "3c4d81bce852b78fc272f711810c65ac",
"assets/assets/images/loyalty/icon_lock.png": "73b35e7aa02cda8f88d8587ba0b5873a",
"assets/assets/images/loyalty/check_redeem_final.png": "3b8c8bf664f0fb4c43f26e66da2d2534",
"assets/assets/images/loyalty/front_card_verify.png": "728464c1cb2f9441548ea40f806ad98b",
"assets/assets/images/loyalty/check_green.png": "a05a2111b8a58a2aa9e1b24e97128cb2",
"assets/assets/images/sad_face.png": "013bf08451241439ba2f5369cf98ea91",
"assets/assets/images/search_ic_active.png": "ff9209780164bcfff9926dc263f84357",
"assets/assets/images/bg_bank.png": "c2fd2a3109b82e14fd35e2b6e93f0958",
"assets/assets/images/discover_ic.png": "99b622125643c363d008a4a5d28f2454",
"assets/assets/images/email.svg": "777233e3d52aefff06ca0c88d45c4d34",
"assets/assets/images/ic_addnewCard.png": "42723ae3fb2368e977c1d52b2b446229",
"assets/assets/images/coupons.png": "73803999e6187fb3c47f7cd355fdee64",
"assets/assets/images/heart.png": "39970b0ef7f373d94ca238244407e790",
"assets/assets/images/user_2.png": "a895203725ddf25a60f798e554361be3",
"assets/assets/images/ic_turnOff.png": "f4cc79330331b36cd1e1ca18a965426b",
"assets/assets/images/no-image-blur.png": "1cf5486871002ed362ce5a81b0bb0177",
"assets/assets/images/balance.png": "49f7edd4640c7eaf3fb688970a48637f",
"assets/assets/images/error.png": "14e04b2e25165a7451bfdc1f071b07dc",
"assets/assets/images/ic_bronze.png": "20843636b407b323bf9874c5b2edf3e1",
"assets/assets/images/ic_search.png": "2e3701598dd8cab4e69181aa66ee5b97",
"assets/assets/images/ic_gold.png": "3c37456e09e1258cd2fe4420abb93eff",
"assets/assets/images/map-pin.png": "9cdbda4b2d734797a8a6b466b9a28a4f",
"assets/assets/images/calendar.png": "74bd0ce76211f09b47cb19d16f649b71",
"assets/assets/images/x_icon.png": "d3fa0d556971b69537bce42b61dabb31",
"assets/assets/images/wallet_ic_active.png": "a37cc9a2bf89e85d9e5f37e5e8e79d17",
"assets/assets/images/dollar_icon_black.png": "43f830b62be2d3009e2e2109b92619cd",
"assets/assets/images/phone_ic.png": "ccc4ae5f1d47eab69ec9a0b4f6c97075",
"assets/assets/images/success.png": "6061891ebf0c6497a63c8f3bea8ebeab",
"assets/assets/images/clock.png": "49b8c7f3832fbf86e708a8e8d0568dbd",
"assets/assets/images/touch_id.png": "50c4d4e03c51ad3475cfbf9349ca4f9b",
"assets/assets/images/discover_ic_active.png": "e69b36dd9435322cccded1ca30a1d72c",
"assets/assets/images/star.png": "b820c7d2f54e8a791bf3400528a3ae94",
"assets/assets/images/ic_correct.png": "f3b10e0a97d85084a583f236a561d4ec",
"assets/assets/images/trash.png": "6bd1b35267f2e76be94f6d691a7b11a5",
"assets/assets/images/search_ic.png": "beef20367f9e3ffcde67cade5aeb03a1",
"assets/assets/images/carousel_2.png": "3d8abe3609e5774d98eed0cb671343bd",
"assets/assets/images/reward.png": "242ff59984ca0b60cc80c77a121f1821",
"assets/assets/images/barcode.png": "7a26482bb8fe46ef68f549ae3558ff27",
"assets/assets/images/no_internet.png": "b07cc7069df131619a31aea40c4c688b",
"assets/assets/images/filter_ic.png": "c4d1c8d16ea671f13b0491372c595a10",
"assets/assets/images/arrow_down.png": "0c8ee1515454bf0ef1385b143a195680",
"assets/assets/images/percent.png": "00ea0e495f9db9d8c1e98fbc73bfd3de",
"assets/assets/images/camera_ic.png": "0a5e2767c76c6422dbb01b24496803af",
"assets/assets/images/logo1.svg": "4a65937395710706a381954dc07e8ad9",
"assets/assets/images/carousel_1.png": "6bfd4f2e8a1081c86ec89790db70553d",
"assets/assets/images/g.png": "c6f6db4e584567679095c1b503a5ab87",
"assets/assets/images/store_ic.png": "c8b91324113d47cccfa80055fee6b07e",
"assets/assets/images/profile_ic.png": "a1743f51411b033b5968ced53adee32e",
"assets/assets/images/f.png": "c318f23cea7d59d439a29c36fd422430",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
