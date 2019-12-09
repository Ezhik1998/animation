define(['dart_sdk', 'packages/diagramm/01'], function(dart_sdk, packages__diagramm__01) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const $01 = packages__diagramm__01.$01;
  const $01_web_entrypoint = Object.create(dart.library);
  const CT = Object.create(null);
  $01_web_entrypoint.main = function main() {
    return async.async(dart.void, function* main() {
      if (true) {
        yield ui.webOnlyInitializePlatform();
      }
      $01.main();
    });
  };
  dart.trackLibraries("packages/diagramm/01_web_entrypoint", {
    "package:diagramm/01_web_entrypoint.dart": $01_web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["01_web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;AAIiB;AACf,UAAI;AACkC,QAApC,MAAM;;AAES,MAAjB;IACF","file":"01_web_entrypoint.ddc.js"}');
  // Exports:
  return {
    $01_web_entrypoint: $01_web_entrypoint
  };
});

//# sourceMappingURL=01_web_entrypoint.ddc.js.map
